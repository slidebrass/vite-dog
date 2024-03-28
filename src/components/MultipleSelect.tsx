import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CardActions, FormControl, InputLabel, MenuItem, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { server_calls } from '../api/server';
import { dog_server_calls } from '../api/dog_server';
import ConButton from './ConButton';

// props being fed to breedDetails state so it can get back correct data and 
// data types from TheDogAPI
interface ResultsTileProps2 {
  url: string;
  breeds: [{
    name: string;
    breed_group: string;
    life_span: string;
    height: {metric: string};
    weight: {metric: string};
    temperament: string;
    reference_image_id: string;
  }]
}

interface BreedDetailsProps {
  url: string;
  breeds: [{
    name: string;
    breed_group: string;
    life_span: string;
    height: {metric: string};
    weight: {metric: string};
    temperament: string;
    reference_image_id: string;
  }]
}

interface Props {
  setBreedDetails: Dispatch<SetStateAction<BreedDetailsProps | undefined>>
}

// props being fed to BreedList, only using dict_breed_name and dict_breed_id
interface BreedList {
  dict_breed_name: string;
  dict_breed_id: number;
  dict_id: number;
}

const MultipleSelect:React.FC<Props> = ({ setBreedDetails }) => {
  const [breedList, setBreedList] = useState<BreedList[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [matchingIds, setMatchingIds] = useState<number>();
  // breedDetails needs to be available at the Parent level(Results.tsx) to this component
  // const [breedDetails, setBreedDetails] = useState<ResultsTileProps2|null>(null)

  // on mount, retrieve all breed names for drop down from own db
  const getBreedList = async () => {
    const data = await server_calls.get_dogdicts()
    console.log(data)
    setBreedList(data)
  }
  useEffect( () => {
    getBreedList()
  }, [] ) 


  // handles adding breedName to list of selected breeds when a breedName is clicked
  const handleBreedNameChange = async (event: SelectChangeEvent<typeof selectedBreed>) => {
    const {
      target: { value },
    } = event;
    console.log(value)
    setSelectedBreed(
      value,
    );
  };
    // when selectedBreed changes, fetch the matching dict_breed_id from breedList
    // set matching ids to state of MatchingIds
    // dict_breed_id required for TheDogAPI call to retrieve reference_image_id
    useEffect(() => {
      for ( let breed of breedList ) {
        if (breed.dict_breed_name === selectedBreed) {
          setMatchingIds(breed.dict_breed_id)
          console.log('found dog name')
          console.log('selected breed == ')
          console.log(selectedBreed)
        }
      }
    }, [selectedBreed])

    console.log('Matching Ids are...')
    console.log(matchingIds)
  
  // onSubmit, retrieve all breedDetails described in ResultsTileProps2
  // set state of breedDetails to data retrieved from dog_server_calls.get
  const onSubmitSelect = async (event: any) => {
    if (event)event.preventDefault()
    console.log('submitting')
    const details = await dog_server_calls.get(matchingIds as number)
    setBreedDetails(details)
  }

  return (
    <div className='bg-[#FCBF49]'>
      <form className='flex justify-center pt-2' onSubmit={(onSubmitSelect)}>
        <FormControl variant="outlined" sx={{ m: 1, width: 500 }}>
          <Stack  
            spacing={2}
            justifyContent={'space-evenly'}>
            <InputLabel id="breed_name-multiple-name-label" className='text-[#003049] text-lg'>Breed Names</InputLabel>
              <Select
                className='bg-gray-200'
                autoWidth={true}
                labelId="breed_name-multiple-name-label"
                value = { selectedBreed }
                id="breed_name=multiple-name"
                onChange={ handleBreedNameChange }
                // multiple
        
              >
                {/* display all breed names listed in the dog_dict table */}
                { breedList.map(({dict_breed_name, dict_breed_id}) => (
                  <MenuItem
                    key={dict_breed_id}
                    value={dict_breed_name}
                  >
                    {dict_breed_name}
                  </MenuItem>
                )) }
              </Select>
            <CardActions className='justify-end'>
              <ConButton 
                type='submit'
                id='search-submit' 
                className='submit-button flex justify-center m-3 bg-[#C9CBA3]
                 text-[#723D46] p-2 rounded hover:bg-[#472D30] hover:text-[#E26D5C]'
              >
                Submit
              </ConButton>
            </CardActions>
          </Stack>
        </FormControl>
      </form>
    </div>
    
  )
};

export default MultipleSelect;
function setBreedDetails(details: any) {
  throw new Error('Function not implemented.');
}

