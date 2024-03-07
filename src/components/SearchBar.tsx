import React, { Children } from 'react';
import MultipleSelect from './MultipleSelect';
import SingleSelect from './SingleSelect';
import ConButton from './ConButton';
import { Stack } from '@mui/material';


interface SearchBarProps {

}

const SearchBar = () => {

  const onSubmit = (data: any, event: any) => {

  }

  return (
    <div>
      <Stack direction='row' spacing={2}>
        <MultipleSelect 
          autoWidth={true}
          defaultValue="Choose A Breed"
          labelId="breed_name-multiple-name-label"
          id="breed_name=multiple-name"
        >
          {Children}
        </MultipleSelect>
        <SingleSelect>{children}</SingleSelect>
        <ConButton className='searchbar-button' onClick={onSubmit}>Submit</ConButton>
      </Stack>
    </div>
  )
}

export default SearchBar
