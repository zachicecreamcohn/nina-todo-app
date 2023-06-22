import React, {useState, useEffect} from 'react';

import styles from './Content.module.css';

function Content(props) {
    const [activeCollection, setActiveCollection] = useState(null);
    const [hasContent, setHasContent] = useState(false);


    useEffect(() => {
        if (props.activeCollectionId !== null) {
            setActiveCollection(props.collectionsList.find((item) => {
                if (item.id === props.activeCollectionId) {
                    return item
                }
            }));
        }
    }, [props.activeCollectionId])

    useEffect(() => {
        if (props.activeCollectionId !== null || props.activeDateCategory !== null) {
            setHasContent(true);
        } else {
            setHasContent(false);
        }
    }, [props.activeCollectionId, props.activeDateCategory])




    return (
        <div className={styles.container}>
            {
                (hasContent) ?
                <div className={styles.content}>
                    <h1>{(props.activeCollectionId !== null) ? activeCollection.name : props.activeDateCategory}</h1>
                    <p>{(props.activeCollectionId !== null) ? activeCollection.description : null}</p>
                </div>
                :
                <div className={styles.content}>
                    <h1>Nothing to show</h1>
                    <p>Click on a collection or date category to view its contents.</p>
                </div>
            }

            
{/*             
            <h1></h1>
            <p>SHOWING: {
                (props.activeCollectionId !== null) ?
                // show collection name via id
                props.collectionsList.find((item) => {
                    return item.id === props.activeCollectionId;
                }).name
                : 
                props.activeDateCategory
            }</p> */}
            
        </div>
    )
}

export default Content;