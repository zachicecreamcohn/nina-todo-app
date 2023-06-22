import React from "react";
import styles from "./Item.module.css";

function Item(props) {
  const color = '#' +props.color || "#2A9D8F";

  return (



    <div className={(props.active ? styles.active : "") + " " + styles.container}
      onClick={props.onClick}
    >
      <span className={styles.tab} style={{ backgroundColor: color }}></span>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}


export default Item;