// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
// import { useTheCatApi } from '../custom-hooks/FetchDogData';
import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';
import { dog_server_calls } from '../api/dog_server';
import MultipleSelect from './MultipleSelect';

// MediaCard from Material UI
interface TileProps {
  component: 'img'
  src: 'string'
}

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

const ResultsTile = ( component: 'img', src: 'string' ) => {
  /** need some way to pass in the data retrieved from FetchDogData */
  
  const [notes, setNotes] = useState('')
  const [breedDetails, setBreedDetails] = useState<ResultsTileProps2|null>(null)


  const handleNoteChange = (event: SelectChangeEvent<string>) => {
    let value = event.target.value
    setNotes(
      value
    )
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            sx={{ height: 140 }}
            image={breedDetails?.url}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {`Breed Name: ${breedDetails?.breeds[0].name}`}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {`Breed Group: ${breedDetails?.breeds[0].breed_group}`}
              {`Life Span: ${breedDetails?.breeds[0].life_span}`}
              {`Weight: ${breedDetails?.breeds[0].weight.metric} Kg`}
              {`Height: ${breedDetails?.breeds[0].height.metric} m`}
              {`Temperament: ${breedDetails?.breeds[0].temperament}`}
            </Typography>
          </CardContent>
          <div>
            <label htmlFor='notes'>Notes</label>
            <Input /*{...register('note_input')}*/ name='note_input' /*onChange={ handleNoteChange }*/
              placeholder='Add notes about this breed here if you would like to add it to your favorites.' />
          </div>
          <CardActions>
            {/* TODO: add visible/hidden functionality for Submit button */}
            {/* If add_favorite button == true && 'notes' == true, Submit button is visible */}
            <ConButton type='favorite'
              className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
            >
              Add Favorite
            </ConButton>
            {/* need a way to submit information to add favorites */}
            <ConButton type='submit'
              className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
            >
              Submit
            </ConButton>
          </CardActions>
        </Card>
    </div>
  )
}

export default ResultsTile
