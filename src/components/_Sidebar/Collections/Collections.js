import React, {useEffect, useState} from "react";
import styles from "./Collections.module.css";

import Item from '../Item/Item';
import { ChevronDown } from 'tabler-icons-react';

function Collections(props) {


    const collections = props.collectionsList;
    const defaultMenuIndex = 0;

    const activeCollectionIndex = props.activeCollectionIndex;
    const setActiveCollectionIndex = props.setActiveCollectionIndex;
    const [collapsed, setCollapsed] = useState(false);

    const activeDateCategory = props.activeDateCategory;
    const setActiveDateCategory = props.setActiveDateCategory;

    useEffect(() => {
        if (activeDateCategory !== null) {
            setActiveCollectionIndex(null);
        }
    }, [activeDateCategory])


    useEffect(() => {
        if (activeCollectionIndex !== null) {
            setActiveDateCategory(null);
        }
    }, [activeCollectionIndex])


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
            
            collections.map((item, index) => {
                return <Item text={item.text} color={item.color} active={activeCollectionIndex === index}
                onClick={() => {
                    setActiveCollectionIndex(index);
                }}/>
            })
        }
        </div>
        </div>
    )
}



export default Collections;