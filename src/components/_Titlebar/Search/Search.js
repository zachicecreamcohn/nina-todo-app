import styles from "./Search.module.css";

import { Search as SearchIcon} from "tabler-icons-react";
import TextField from '@mui/material/TextField';

function Search() {

    return (
        <div className={styles.container}>
           <TextField
           fullWidth

                variant="outlined"
                className={styles.searchField}
                color="white"
                InputProps={{
                    className: styles.searchFieldInput,
                    startAdornment: <SearchIcon size={20} strokeWidth={1} color="white" className={styles.searchIcon} />,
                }}
                size="small"
            />

        </div>


    )
}

export default Search;