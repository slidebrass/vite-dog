import MultipleSelect from './MultipleSelect';
import ConButton from './ConButton';
import { Stack } from '@mui/material';


interface SearchBarProps {
  id: string[];
  onClose: () => void;
}
// SearchBar will include MultipleSelect and ConButton.
const SearchBar = () => {

  const onSubmit = (data: any, event: any) => {
    // use FetchDogData
  }

  return (
    <div>
      <Stack direction='row' spacing={8}>
        <MultipleSelect />
        {/* <ConButton className='searchbar-button' >Submit</ConButton> */}
      </Stack>
    </div>
  )
}

export default SearchBar
