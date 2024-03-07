import MultipleSelect from './MultipleSelect';
import ConButton from './ConButton';
import { Stack } from '@mui/material';


interface SearchBarProps {

}
// SearchBar will include MultipleSelect and ConButton.
const SearchBar = () => {

  const onSubmit = (data: any) => {
    // use FetchDogData
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
          {children}
        </MultipleSelect>
        <ConButton className='searchbar-button' onClick={onSubmit}>Submit</ConButton>
      </Stack>
    </div>
  )
}

export default SearchBar
