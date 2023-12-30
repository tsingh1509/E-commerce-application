import "./filter.css"
import { Button } from "@mui/material";

const Filter = () => {
    return(
        <div className="filterContainer">
            <Button className="filter-button" variant="outlined">Best Quality</Button>
            <Button className="filter-button" variant="outlined">Rating 4+</Button>
            <Button className="filter-button" variant="outlined">Top Selection</Button>
        </div>
    )
}

export default Filter;