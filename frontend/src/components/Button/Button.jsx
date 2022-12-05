import React from "react";
import styles from "./Button.module.css";

export default function BtnSubmit({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
