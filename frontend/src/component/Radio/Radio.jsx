import React, { useContext, useState } from "react";
import RadioContext from "../../../../../../Downloads/project-heeseon/project-heeseon/src/context/RadioContext";
import styles from "./Radio.module.css";

export default function Radio({ children, value, name, defaultChecked }) {
  const group = useContext(RadioContext);

  return (
    <div className={styles.box}>
      <label className={styles.label}>
        <input
          className={styles.radio}
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          checked={
            group.value !== undefined ? value === group.value : undefined
          }
          onChange={group.onChange}
        />
        {children}
      </label>
    </div>
  );
}
