import ConButton from "../components/ConButton";
import MultipleSelect from "../components/MultipleSelect";
import DogApiForm from "../components/DogApiForm";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <>
      <div>
        <Stack direction='row' spacing={2}>
          < MultipleSelect 
            autoWidth=true
            defaultValue="Choose A Breed"
            labelId="breed_name-multiple-name-label"
            id="breed_name=multiple-name"
          />
        </Stack>
      </div>
    </>
  )
}

export default Search
