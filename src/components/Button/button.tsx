import * as React from "react";
import styles from "./button.module.css";

interface props {
  children: any;
  onClick?: () => void;
}

export const Button: React.FC<props> = ({ children, onClick }) => (
  
  <button  data-testid="button" className={styles.button} onClick={onClick}>
    {children}
  </button>
);
