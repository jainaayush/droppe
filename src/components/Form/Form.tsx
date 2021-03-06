import * as React from "react";
import { Button } from "../Button/Button";
import styles from "./form.module.css";
import { IFormProps , IProduct} from "../../types/customs"

const Form: React.FC<IFormProps> = (props) => {
  // update data in state because using Ref component will be uncontrol
  const [data, setData] = React.useState<IProduct>({
    title: "",
    price: "",
    description: "",
    rating: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    // check rating give between 0 to 5
    if (e.target.name === "rating" && (parseFloat(e.target.value) > 5 || parseFloat(e.target.value) < 0)) {
      alert("Please give rating between 0 to 5")
      return;
    }
    // form data update here
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (data.title === "") {
      alert("Your product needs a title");

      return;
    }

    if (data?.description === "" || data?.price === "" || data?.rating === "") {
      alert("Your product needs some content");

      return;
    }

    props["on-submit"]({
      title: data?.title,
      description: data?.description,
      price: data?.price,
      rate: data?.rating

    });
  };
  return (
    <form data-testid="productAdd-form" className={styles.form} onSubmit={(event) => handleSubmit(event)}
    >
      <span className={styles.label}>Product title: *</span>

      <input
        value={data.title}
        placeholder="Title..."
        name="title"
        className={styles.input}
        data-testid="title"
        onChange={(e) => handleChange(e)}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        value={data.price}
        name="price"
        placeholder="Price..."
        data-testid="price"
        onChange={(e) => handleChange(e)}
        className={styles.input}
        type="number"
      />

      <input
        value={data.rating}
        name="rating"
        placeholder="Rating..."
        data-testid="rating"
        type="number"
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />

      <textarea
        value={data.description}
        placeholder="Start typing product description here..."
        data-testid="description"
        name="description"
        onChange={(e) => handleChange(e)}
        className={styles.textarea}
      />

      <Button data-testid="add-Product">Add a product</Button>
    </form>
  );
};
export default React.memo(Form)