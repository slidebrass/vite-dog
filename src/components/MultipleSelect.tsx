import { useEffect, useState } from 'react';
import { FormControl, OutlinedInput, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetId } from '../custom-hooks/FetchDogId';
import { server_calls } from '../api/server';

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
  const [breedName, setBreedName] = React.useState<string[]>([]);
  // const { dogIdData, setData } = useGetId();
  // easier way than useGetId seems to be using the key/value pair {dict_breed_id: dict_breed_name} 
  // called for the multipleSelect dropdown menu.


  // TODO: is this an event or value? If so, what kind?
  // handles adding breedName to list of selected breeds when a breedName is clicked
  const handleBreedNameChange = (event) => {
    const breedName {
      target: { value },
    } = event;
    setBreedName(
      typeof value === 'string' ? value.split(',') : value,
    );
    // useGetId to take selected breedName and return 
    // dict_breed_id (the id required to execute 3rd party API calls)
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

        >
          {/* want to display all breed names listed in the dog_dict table */}
          { server_calls.get_dogdicts().map(([dict_breed_name: string, dict_breed_id: number]) => (
            <MenuItem
              key={dict_breed_id}
              value={dict_breed_name}
            >
              {dict_breed_name}
            </MenuItem>
          )) }
        </Select>
      </FormControl>
    </div>
  )
};

export default MultipleSelect;
