import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Stack, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { useGetId } from '../custom-hooks/FetchDogId';
import { server_calls } from '../api/server';
import { dog_server_calls } from '../api/dog_server';
import ConButton from './ConButton';

interface ResultsTileProps {
  reference_image_id: string | undefined;
  name: string;
  breed_group: string;
  life_span: string;
  height: {metric: string};
  weight: {metric: string};
  temperament: string;
}

interface BreedInfo {
  dict_breed_name: string;
  dict_breed_id: number;
  dict_id: number;
}


const MultipleSelect = () => {
  // const { register, handleSubmit } = useForm({})

  const [breedInfo, setBreedInfo] = useState<BreedInfo[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[] | string>();
  const [matchingIds, setMatchingIds] = useState<number>()
  const [breedDetails, setBreedDetails] = useState<ResultsTileProps|null>(null)
  // const [dogIdData] = useGetId(selectedBreeds);
  const getBreedInfo = async () => {
    const data = await server_calls.get_dogdicts()
    console.log(data)
    setBreedInfo(data)
  }
  useEffect( () => {
    getBreedInfo()
  }, [] ) 
  // const { dogIdData, setDogIdData } = useGetId();
  // easier way than useGetId seems to be using the key/value pair {dict_breed_id: dict_breed_name} 
  // called for the multipleSelect dropdown menu.




  // handles adding breedName to list of selected breeds when a breedName is clicked
  const handleBreedNameChange = async (event: SelectChangeEvent<typeof selectedBreeds>) => {
    const {
      target: { value },
    } = event;
    console.log(value)
    setSelectedBreeds(
      value,
    );
    // for each name in selectedBreeds, loop through through breedInfo; 
    // if value in setSelectedBreeds === value in breedInfo;
    // return key from breedInfo that matches value

    // function getKeyByValue(object: any, value: string) {
    //   return Object.keys(object).find(key => object[key] === value)
    // }

    
    // for ( let i = 0; i < selectedBreeds.length; i++) {
    //   if (selectedBreeds[i] in breedInfo ) {
    //     let breed_ids = getKeyByValue(breedInfo, selectedBreeds[i])
    //     console.log(breed_ids)
    //     setMatchingIds(breed_ids)
    //   }
    // }
  };
  console.log(selectedBreeds)
    useEffect(() => {
      for ( let breed of breedInfo ) {
        if (breed.dict_breed_name === selectedBreeds) {
          setMatchingIds(breed.dict_breed_id)
          console.log('found dog name')
        }
      }
    }, [selectedBreeds])
    
    console.log(breedDetails)
    console.log(matchingIds)
  // useEffect( () => {
  //   for ( let i = 0; i < selectedBreeds.length; i++) {
  //     // loop through selectedBreeds and receive dogIdData for each breed
  //     dogIdData.push(selectedBreeds[i]);
  //   }
  // }, [selectedBreeds])

  const onSubmit = async (event: any) => {
    if (event)event.preventDefault()
    const details = await dog_server_calls.get(matchingIds as number)
        setBreedDetails(details)
    
    // console.log(dogIdData)
    // console.log(data);
    // if (dogIdData.length > 0) {
    //   dog_server_calls.get(dogIdData)
    //   event.target.reset()
    // }
  }
  console.log(breedDetails)



  return (
    <div>
      <Stack direction='row' spacing={2}>
        <FormControl onSubmit={onSubmit} variant="outlined" sx={{ m: 1, width: 300 }}>
          <InputLabel id="breed_name-multiple-name-label">Breed Names</InputLabel>
          <Select
            autoWidth={true}
            labelId="breed_name-multiple-name-label"
            value = { selectedBreeds }
            id="breed_name=multiple-name"
            onChange={ handleBreedNameChange }
            // multiple
            
          >
            {/* want to display all breed names listed in the dog_dict table */}
            { breedInfo.map(({dict_breed_name, dict_breed_id}) => (
              <MenuItem
                key={dict_breed_id}
                value={dict_breed_name}
              >
                {dict_breed_name}
              </MenuItem>
            )) }
          </Select>
          <ConButton type='submit' className='submit-button flex justify-start m-3 
            bg-[#C9CBA3] text-[#723D46] p-2 rounded hover:bg-[#472D30] hover:text-[#E26D5C]'
          >
            Submit
          </ConButton>
        </FormControl>
      </Stack>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          sx={{ height: 140 }}
          image={breedDetails.reference_image_id}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {`Breed Name: ${breedDetails.name}`}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            `Breed Group: ${breedDetails.breed_group}`
            `Life Span: ${breedDetails.life_span}`
            `Weight: ${breedDetails.weight.metric} Kg`
            `Height: ${breedDetails.height.metric} m`
            `Temperament: ${breedDetails.temperament}`
          </Typography>
        </CardContent>
        <div>
          <label htmlFor='notes'>Notes</label>
          <Input {...notes('note_input')} name='note_input' onChange={ handleNoteChange }
            placeholder='Add notes about this breed here if you would like to add it to your favorites.' />
        </div>
        <CardActions>
          {/* TODO: add visible/hidden functionality for Submit button */}
          {/* If add_favorite button == true && 'notes' == true, Submit button is visible */}
          <ConButton 
            className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
          >
            Add Favorite
          </ConButton>
          {/* need a way to submit information to add favorites */}
          <ConButton 
            className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
          >
            Submit
          </ConButton>
        </CardActions>
      </Card>
    </div>
  )
};

export default MultipleSelect;
