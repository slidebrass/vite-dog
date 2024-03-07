import { useEffect, useState } from 'react';
import { FormControl, OutlinedInput, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetId } from '../custom-hooks/FetchDogId';
import { server_calls } from '../api/server';


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

interface SelectProps {
  autoWidth: boolean;
  children: React.ReactNode;
  className?: string;
  defaultValue: string;
  labelId: string;
  id: string;
  value: string;
  // input: Element;
}

const MultipleSelect = ( props: SelectProps ) => {
  // const theme = useTheme();
  const [breedName, setBreedName] = React.useState<string[]>([]);
  // const { dogIdData, setData } = useGetId();
  // onClick, fetch dogIdData from dogdict "dog_breed_id"
  // so that information is available for the dogApi call when the user clicks "submit"


  // TODO: is this an event or value? If so, what kind?
  const handleBreedNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setBreedName(
      typeof value === 'string' ? value.split(',') : value,
    );
    useGetId({event.target.value})
  };



  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="breed_name-multiple-name-label">Breed Name</InputLabel>
        <Select
          autoWidth={ props.autoWidth }
          // className={ props.className }
          defaultValue={ props.defaultValue }
          labelId={ props.labelId }
          onChange={ handleBreedNameChange }
          id={ props.id }
          value={ breedName }
          // input={ props.input }
          // labelId="breed_name-multiple-name-label"
          // id="breed_name=multiple-name"
          // multiple value={breedName}
          // onChange={handleBreedNameChange}
          // input={<OutlinedInput label="Breed Name" />}
          // MenuProps={MenuProps}
        >
          { server_calls.get_dogdicts().map(([dict_breed_name: string, dict_breed_id: number]) => (
            <MenuItem
              key={dict_breed_id}
              value={dict_breed_name}
            >
              {dict_breed_name}
            </MenuItem>
          )) }
          {/* {Object.entries(breeds).map(([dict_breed_name, dict_breed_id]) => (
            <MenuItem
              key={dict_breed_id}
              value={dict_breed_name}
            // style={breed, breedName, theme}
            >
              {dict_breed_name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </div>
  )
};

export default MultipleSelect;
