import * as React from "react";
import styles from "./button.module.css";
import { props } from "../../types/customs"

export const Button: React.FC<props> = ({ children, onClick }) => (
  
  <button  data-testid="button" className={styles.button} onClick={onClick}>
    {children}
  </button>
);
