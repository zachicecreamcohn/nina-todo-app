import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Collections from "../Collections/Collections";
import { CalendarEvent, Rocket } from "tabler-icons-react";

function Sidebar(props) {
  const activeDateCategory = props.activeDateCategory;
    const setActiveDateCategory = props.setActiveDateCategory;
    const activeCollectionIndex = props.activeCollectionIndex;
    const setActiveCollectionIndex = props.setActiveCollectionIndex;
  return (
    <div className={(props.sidebarCollapsed ?  styles.container + " " + styles.collapsed : styles.container)}>
      <div className={styles.content}>
            <div
        className={
          activeDateCategory === "today"
            ? styles.dateCategory + " " + styles.active
            : styles.dateCategory
        }
        onClick={() => {
          if (activeDateCategory !== "today") {
            setActiveDateCategory("today");
          } else {
            setActiveDateCategory(null);
          }
        }}
      >
        <span className={styles.icon}>
          <Rocket strokeWidth={1.5} size={20} />
        </span>
        <h1>Today</h1>
      </div>
      <div
        className={
          activeDateCategory === "upcoming"
            ? styles.dateCategory +
              " " +
              styles.lastDateCategory +
              " " +
              styles.active
            : styles.dateCategory + " " + styles.lastDateCategory
        }
        onClick={() => {
          if (activeDateCategory !== "upcoming") {
            setActiveDateCategory("upcoming");
          } else {
            setActiveDateCategory(null);
          }
        }}
      >
        <span className={styles.icon}>
          <CalendarEvent strokeWidth={1.5} size={20} />
        </span>
        <h1>Upcoming</h1>
      </div>
      <Collections
        collectionsList={props.collectionsList}
        activeCollectionIndex={activeCollectionIndex}
        setActiveCollectionIndex={setActiveCollectionIndex}
        activeDateCategory={activeDateCategory}
        setActiveDateCategory={setActiveDateCategory}
        />
        </div>
    </div>
  );
}

export default Sidebar;
