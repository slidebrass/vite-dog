import React from 'react';
import { useTheme } from '@mui/material';
import OutlinedInput from '@mui/material';
import InputLabel from '@mui/material';
import MenuItem from '@mui/material';
import FormControl from '@mui/material';
import Select from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const breeds = {
  "Affenpinscher": 1,
  "Afghan Hound": 2,
  "African Hunting Dog": 3,
  "Airedale Terrier": 4,
  "Akbash Dog": 5,
  "Akita": 6,
  "Alapaha Blue Blood Bulldog": 7,
  "Alaskan Husky": 8,
  "Alaskan Malamute": 9,
  "American Bulldog": 10
};

function getStyles(breed, breedName, theme) {
  return {
    fontWeight:
    breedName.indexOf(breed) === -1
    ? theme.typography.fontWeightRegular
    : theme.typography.fontWeightMedium,
  };
};

function MultipleSelect() {
  const theme = useTheme();
  const [breedName, setBreedName] = React.useState([]);
  
  const handleBreedNameChange = (event) => {
    const {
      target: { value },
    }  = event;
    setBreedName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300}}>
        <InputLabel id="demo-multiple-name-label">Breed Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo=multiple-name"
          multiple value={breedName}
          onChange={handleBreedNameChange}
          input={<OutlinedInput label="Breed Name" />}
          MenuProps={MenuProps}
        >
          {breeds.map((breed) => (
            <MenuItem
              key={breed}
              value={breed}
              style={breed, breedName, theme}
            >
              {breed}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SearchBar
