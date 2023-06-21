import React from 'react';

import styles from './Content.module.css';

function Content(props) {


    return (
        <div className={styles.container}>
            <p>SHOWING: {
                (props.activeCollectionIndex !== null) ?
                props.collectionsList[props.activeCollectionIndex].text :
                props.activeDateCategory
            }</p>
            
        </div>
    )
}

export default Content;