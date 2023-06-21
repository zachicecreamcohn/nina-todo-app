import React from "react";

import styles from "./BasePopup.module.css";

function BasePopup(props) {


    function closePopup(e) {
        if (e.target.className === styles.container) {
            props.closePopup();
        }
    }
    return (
        <div className={styles.container} onClick={closePopup}>
            <div className={styles.popup}>
                {props.children}
            </div>
        </div>
    )
}

export default BasePopup;