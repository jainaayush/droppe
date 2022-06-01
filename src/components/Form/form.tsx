import * as React from "react";
import { Button } from "../Button/button";
import styles from "./form.module.css";

type IFormProps = {
  "on-submit": (payload: { title: string; description: string; price: string, rate : Number }) => void;
}

const Form: React.FC<IFormProps> = (props) => {
  // let formRef = React.useRef<HTMLFormElement>(null);
  // let titleRef = React.useRef<HTMLInputElement>(null);
  // let priceRef = React.useRef<HTMLInputElement>(null);
  // let descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const [data, setData] = React.useState({
    title: "",
    price: "",
    description: "",
    rating : 0
  })

  const handleChange = (e: any) => {

    if(e.target.name === "rating" && (parseFloat(e.target.value) > 5  || parseFloat(e.target.value) < 0)){
      alert("Please give rating between 0 to 5")
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (data.title === "") {
      alert("Your product needs a title");

      return;
    }

    if (data?.description === "" || data?.price === "" || data?.rating === 0) {
      alert("Your product needs some content");

      return;
    }

    props["on-submit"]({
      title: data?.title,
      description: data?.description,
      price: data?.price,
      rate : data?.rating

    });

    // formRef.current?.reset();
  };
  console.log(data)
  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)}
    // ref={formRef}
    >
      <span className={styles.label}>Product title: *</span>

      <input
        // ref={titleRef}
        value={data.title}
        placeholder="Title..."
        defaultValue=""
        name="title"
        className={styles.input}
        onChange={(e) => handleChange(e)}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        // ref={priceRef}
        value={data.price}
        name="price"
        placeholder="Price..."
        defaultValue=""
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />

      <input
        // ref={priceRef}
        value={data.rating}
        name="rating"
        placeholder="Rating"
        // defaultValue=""
        type="number"
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />

      <textarea
        // ref={descriptionRef}
        value={data.description}
        placeholder="Start typing product description here..."
        defaultValue=""
        name="description"
        onChange={(e) => handleChange(e)}
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
export default React.memo(Form)