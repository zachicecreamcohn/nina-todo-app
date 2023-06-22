import React, {useEffect, useState} from "react";
import styles from "./Collections.module.css";

import Item from '../Item/Item';
import { ChevronDown } from 'tabler-icons-react';

function Collections(props) {


    const collections = props.collectionsList;
    const defaultMenuIndex = 0;

    const activeCollectionId = props.activeCollectionId;
    const setActiveCollectionId = props.setActiveCollectionId;
    const [collapsed, setCollapsed] = useState(false);

    const activeDateCategory = props.activeDateCategory;
    const setActiveDateCategory = props.setActiveDateCategory;

    useEffect(() => {
        if (activeDateCategory !== null) {
            setActiveCollectionId(null);
        }
    }, [activeDateCategory])


    useEffect(() => {
        if (activeCollectionId !== null) {
            setActiveDateCategory(null);
        }
    }, [activeCollectionId])


    return (
        <div className={(collapsed) ? styles.container + " " + styles.collapsed: styles.container}>
            <div className={styles.headerContainer}>
                <ChevronDown className={(collapsed) ? styles.icon + " " + styles.collapsed: styles.icon}
                strokeWidth={1.5}
                size={20}
                onClick={() => {
                    setCollapsed(!collapsed);
                }}
                />
                <h1 className={styles.header}>Collections</h1>
            </div>

        <div className={styles.items}>
        {

            collections &&
            // for each collection, render an Item component
            collections.map((item, index) => {
                return <Item text={item.name} color={item.color} active={activeCollectionId === item.id} key={index}
                onClick={() => {
                    if (activeCollectionId === item.id) {
                        setActiveCollectionId(null);
                    } else {
                    setActiveCollectionId(item.id);
                    }
                }}/>
            })
            

            // collections.map((item, index) => {
            //     return <Item text={item.name} color={item.color} active={activeCollectionId === item.id}
            //     onClick={() => {
            //         if (activeCollectionId === item.id) {
            //             setActiveCollectionId(null);
            //         } else {
            //         setActiveCollectionId(item.id);
            //         }
            //     }}/>
            // })
        }
        </div>
        </div>
    )
}



export default Collections;