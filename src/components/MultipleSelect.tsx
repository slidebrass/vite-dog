import { useEffect, useState } from 'react';
import { CardActions, FormControl, InputLabel, MenuItem, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { server_calls } from '../api/server';
import { dog_server_calls } from '../api/dog_server';
import ConButton from './ConButton';


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

interface BreedInfo {
  dict_breed_name: string;
  dict_breed_id: number;
  dict_id: number;
}

const MultipleSelect = () => {

  const [breedInfo, setBreedInfo] = useState<BreedInfo[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [matchingIds, setMatchingIds] = useState<number>()
  const [breedDetails, setBreedDetails] = useState<ResultsTileProps2|null>(null)

  // on mount, retrieve all breed names for drop down
  const getBreedInfo = async () => {
    const data = await server_calls.get_dogdicts()
    console.log(data)
    setBreedInfo(data)
  }
  useEffect( () => {
    getBreedInfo()
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
  
    useEffect(() => {
      for ( let breed of breedInfo ) {
        if (breed.dict_breed_name === selectedBreed) {
          setMatchingIds(breed.dict_breed_id)
          console.log('found dog name')
          console.log('selected breed == ')
          console.log(selectedBreed)
        }
      }
    }, [selectedBreed])

    console.log('breed Details are...')
    console.log(breedDetails)
    console.log('Matching Ids are...')
    console.log(matchingIds)

  const onSubmit = async (event: any) => {
    if (event)event.preventDefault()
    console.log('submitting')
    const details = await dog_server_calls.get(matchingIds as number)
      setBreedDetails(details)
      server_calls.create_breed_info(breedDetails)
  }
  console.log(breedDetails)

  return (
    <div className='bg-slate-200'>
      <form className='flex justify-center' onSubmit={(onSubmit)}>
        <FormControl variant="outlined" sx={{ m: 1, width: 500 }}>
          <Stack  
            spacing={2}
            justifyContent={'space-evenly'}>
            <InputLabel id="breed_name-multiple-name-label">Breed Names</InputLabel>
            <Select
              // {...register(breedDetails)}
              autoWidth={true}
              labelId="breed_name-multiple-name-label"
              value = { selectedBreed }
              id="breed_name=multiple-name"
              onChange={ handleBreedNameChange }
              // multiple
      
            >
              {/* display all breed names listed in the dog_dict table */}
              { breedInfo.map(({dict_breed_name, dict_breed_id}) => (
                <MenuItem
                  key={dict_breed_id}
                  value={dict_breed_name}
                >
                  {dict_breed_name}
                </MenuItem>
              )) }
            </Select>
            <CardActions>
              <ConButton 
                type='submit'
                id='search-submit' className='submit-button flex justify-start m-3
                bg-[#C9CBA3] text-[#723D46] p-2 rounded hover:bg-[#472D30] hover:text-[#E26D5C]'
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
