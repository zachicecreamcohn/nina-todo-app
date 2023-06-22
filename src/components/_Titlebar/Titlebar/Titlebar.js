import styles from "./Titlebar.module.css";
import { Home, Menu2, Settings, Plus } from "tabler-icons-react";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import NewCollection from "../../_Popup/NewCollection/NewCollection";

function Titlebar(props) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showNewCollectionPopup, setShowNewCollectionPopup] = useState(false);

  useEffect(() => {
    let intervalId;
    async function fetchFullScreenState() {
      const isFullScreen =
        (await window.api.invoke("isFullScreen")) || false;
      setIsFullScreen(isFullScreen);
    }

    // Call the function once immediately
    fetchFullScreenState();

    // Then set up an interval to call it every 500ms
    intervalId = setInterval(fetchFullScreenState, 500);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (isFullScreen !== null && isFullScreen !== undefined && isFullScreen) {
      console.log("Window is fullscreen");
    } else {
      console.log("Window is not fullscreen");
    }
  }, [isFullScreen]);

  return (
    <div className={styles.container}>
      {isFullScreen ? null : <div className={styles.offsetWindowButtons}></div>}
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <Menu2
            size={23}
            strokeWidth={1}
            color="white"
            onClick={() => {
              props.setSidebarCollapsed(!props.sidebarCollapsed);
            }}
            className={styles.sidebarToggle}
          />
          <Home
            size={21}
            strokeWidth={1}
            color="white"
            className={styles.home}
          />
          {/* <Sear ch /> FEATURE IN PROGRESS */}
        </div>
        <div className={styles.center}></div>
        <div className={styles.right}>
          <Plus
            size={23}
            strokeWidth={1}
            color="white"
            className={styles.plus}
            onClick={() => {
              setShowNewCollectionPopup(true);
            }}
          />
          <Settings
            size={21}
            strokeWidth={1}
            color="white"
            className={styles.settings}
          />
        </div>
      </div>

    {showNewCollectionPopup ? (
      <NewCollection
        setShowNewCollectionPopup={setShowNewCollectionPopup}
        collectionsList={props.collectionsList}
        setCollectionsList={props.setCollectionsList}
  />
    ) : null}
    </div>


  );
}

export default Titlebar;
