import React, { useState, useEffect } from "react";

import styles from "./NewCollection.module.css";

import BasePopup from "../BasePopup/BasePopup";

import { TextField } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';




function NewCollection(props) {



    const setShowNewCollectionPopup = props.setShowNewCollectionPopup;


    const [newCollectionName, setNewCollectionName] = useState("");


  const colorOptions = [
    { value: "264653", label: "Navy" },
    { value: "2A9D8F", label: "Teal" },
    { value: "E9C46A", label: "Yellow" },
    { value: "F4A261", label: "Orange" },
    { value: "E76F51", label: "Red" },
    { value: "E63946", label: "Maroon" },
    { value: "151515", label: "Black" },
  ];

  const defaultColor = colorOptions[0].value;
  const [color, setColor] = useState(defaultColor);


  const handleChange = (event) => {
    setColor(event.target.value);
  };

  function closePopup() {
    setShowNewCollectionPopup(false);
  }


  async function createCollection(name, color) {
    const newCollection = await window.api.invoke("new-collection", {
      name: name,
      color: color,
    });

    props.setCollectionsList((collectionsList) => [
      ...collectionsList,
      newCollection,
    ]);
    
    closePopup();
  }

  return (
    <BasePopup closePopup={closePopup}>
      <div className={styles.container}>
        {/* <h1 className={styles.header}>Create A New Collection</h1> */}
        <TextField
          className={styles.input}
          placeholder="My Collection"
          helperText="Enter a name for your new collection"
          variant="outlined"
          size="small"
          fullWidth
          onBlur={(e) => setNewCollectionName(e.target.value)}
        />
        <div className={styles.details}>
          <div className={styles.colorPicker}>
            <FormControl size="small" fullWidth>
              <Select
                value={color}
                onChange={handleChange}
                sx={{
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                }}
              >
                {colorOptions.map((option) => (
                  <MenuItem
                    value={option.value}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* {option.label}  */}
                    <Box
                      component="span"
                      className={styles.colorIcon}
                      style={{
                        backgroundColor: "#" + option.value,
                        marginLeft: "10px",
                        display: "inline-block",
                      }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            
          </div>
          <Button variant="contained" size="" disableElevation 
          disabled={newCollectionName === "" || color === ""}
          style={
            {
                backgroundColor: "#3D74BE",
            }
        }
            className={styles.createButton}
            onClick={() => createCollection(newCollectionName, color)}
          >Create</Button>

        </div>
      </div>
    </BasePopup>
  );
}

export default NewCollection;
