import * as React from "react";
import { Button } from "../Button/button";
import styles from "./form.module.css";

type IFormProps = {
  "on-submit": (payload: { title: string; description: string; price: string, rate: string }) => void;
}
interface IProduct {
  title: string;
  price: string;
  description: string;
  rating: string;

}
const Form: React.FC<IFormProps> = (props) => {
  const [data, setData] = React.useState<IProduct>({
    title: "",
    price: "",
    description: "",
    rating: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

    if (e.target.name === "rating" && (parseFloat(e.target.value) > 5 || parseFloat(e.target.value) < 0)) {
      alert("Please give rating between 0 to 5")
      return;
    }
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
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)}
    >
      <span className={styles.label}>Product title: *</span>

      <input
        value={data.title}
        placeholder="Title..."
        name="title"
        className={styles.input}
        onChange={(e) => handleChange(e)}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        value={data.price}
        name="price"
        placeholder="Price..."
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />

      <input
        value={data.rating}
        name="rating"
        placeholder="Rating..."
        type="number"
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />

      <textarea
        value={data.description}
        placeholder="Start typing product description here..."
        name="description"
        onChange={(e) => handleChange(e)}
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
export default React.memo(Form)