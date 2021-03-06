import * as React from "react";
import lodash from 'lodash';
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../components/Button/Button";
import ProductList from "../../components/ProductList/productList";
import Form from "../../components/Form/Form";
import logo from "../../images/droppe-logo.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import axios from "axios";
import styles from "./shopApp.module.css";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { ApiData } from "../../types/customs"

export class ShopApp extends React.Component<
  {},
  { products: any[]; isOpen: boolean; isShowingMessage: boolean; message: string; numFavorites: number; prodCount: number }
>
{
  static find: any;
  constructor(props: any) {
    super(props);
    this.favClick = this.favClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { products: [], isOpen: false, isShowingMessage: false, message: '', numFavorites: 0, prodCount: 0 };
  }
  // call get product api here 
  getData = async () => {
    await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
      headers: { 'Access-Control-Allow-Origin': "*" }
    }).then((response) => {
      this.setState({
        products: response?.data,
        prodCount: response?.data?.length
      });
    }).catch(() => {

    })
  }
  componentDidMount() {
    document.title = "Droppe refactor app"
    // call get product api when component mount
    this.getData()
  }
  // write add favorite logic using "id" because title are same more than one product 
  favClick(id: Number) {
    const prods = this.state.products;
    const idx = lodash.findIndex(prods, { id: id })
    let currentFavs = this.state.numFavorites
    let totalFavs: any;

    if (prods[idx].isFavorite) {
      prods[idx].isFavorite = false;
      totalFavs = --currentFavs
    } else {
      totalFavs = ++currentFavs
      prods[idx].isFavorite = true;
    }

    this.setState(() => ({ products: prods, numFavorites: totalFavs }));
  }
  // update data in state logic write here
  addData = (data?: ApiData, rate?: string) => {
    const updated = lodash.clone(this.state.products);
    let id = this.state?.products?.length + 1
    updated.push({
      id: id,
      title: data?.title,
      description: data?.description,
      price: data?.price,
      rating: {
        rate: rate
      }
    });

    this.setState({
      products: updated,
      prodCount: lodash.size(this.state.products) + 1,
      isShowingMessage: false,
      message: ''
    });

  }
  // call post api using axios and logic
  async onSubmit(payload: { title: string; description: string, price: string, rate: string }) {

    this.setState({
      isOpen: false,
      isShowingMessage: true,
      message: 'Adding product'
    });
    await axios({
      method: 'post',
      url: 'https://fakestoreapi.com/products',
      data: {
        title: payload.title,
        price: payload.price,
        description: payload.description,
        rating: {
          rate: payload.rate,
        }
      }
    }).then((response) => {
      if (response.status === 200) {
        let data = response?.data
        let rate = payload?.rate
        this.addData(data, rate)

      }
    }).catch(() => {
    })
  }

  render() {
    const { products, isOpen } = this.state;
    return (
      <React.Fragment>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={['container', styles.headerImageWrapper].join(' ')}>
              <img data-testid="droppeLogo" src={logo} className={styles.headerImage} alt="Droppe" />
            </div>
          </div>

          <>
            <span
              className={['container', styles.main, styles.bannerbox].join(' ')}
            >
              <img data-testid="doctorsImg" src={img1} className={styles.bannerimg} alt="Doctors" />
              <img data-testid="labImg" src={img2} className={styles.bannerimg} alt="Lab" />
            </span>
          </>

          <div className={['container', styles.main].join(' ')} style={{ paddingTop: 0 }}>
            <div className={styles.buttonWrapper}>
              <span role="button">
                <Button
                  onClick={function (this: any) {
                    this.setState({
                      isOpen: true,
                    });
                  }.bind(this)}
                >Send product proposal</Button>
              </span>
              {this.state.isShowingMessage && <div className={styles.messageContainer}>
                <div style={{ display: 'flex' }}>
                  <i>{this.state.message}</i>
                  <Dots color="blue" />
                </div>
              </div>}
            </div>

            <div className={styles.statsContainer}>
              <span>Total products: {this.state.prodCount}</span>
              {' - '}
              <span>Number of favorites: {this.state.numFavorites}</span>
            </div>

            {products && !!products?.length ? <ProductList products={products} onFav={this.favClick} /> : <div className={styles.loader}><Dots color="blue" /></div>}
          </div>
        </div>

        <>
          <Modal
            isOpen={isOpen}
            className={styles.reactModalContent}
            overlayClassName={styles.reactModalOverlay}
          >
            <div className={styles.modalContentHelper}>
              <div
                className={styles.modalClose}
                onClick={function (this: any) {
                  this.setState({
                    isOpen: false,
                  });
                }.bind(this)}
              ><FaTimes /></div>

              <Form
                on-submit={this.onSubmit}
              />
            </div>
          </Modal>
        </>
      </React.Fragment>
    );
  }
}
