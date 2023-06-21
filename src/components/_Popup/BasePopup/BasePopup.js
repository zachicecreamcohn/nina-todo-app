import React from "react";

import styles from "./BasePopup.module.css";

function BasePopup(props) {

    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                {props.children}
            </div>
        </div>
    )
}

export default BasePopup;