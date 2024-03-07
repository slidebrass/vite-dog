import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import React from "react";

/*
interface SingleSelectProps {
    children: React.ReactNode;

}
*/

// TODO: use ref instead?
const SingleSelect = () => {
  const [num, setNum] = React.useState([]);

  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120}}>
        <InputLabel id="single-select-filled-label">Amount</InputLabel>
        <Select
          labelId="single-select-filled-label"
          id="single-select-filled"
          value={num}
          onChange={handleNumChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SingleSelect
