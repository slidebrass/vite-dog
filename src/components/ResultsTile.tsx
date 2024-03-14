// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
// import { useTheCatApi } from '../custom-hooks/FetchDogData';
import { useEffect, useState } from 'react';
import { dog_server_calls } from '../api/dog_server';
import MultipleSelect from './MultipleSelect';

// MediaCard from Material UI
interface TileProps {
  component: 'img'
  src: 'string'
}

const ResultsTile = ( component: 'img', src: 'string', data: any ) => {
  /** need some way to pass in the data retrieved from FetchDogData */
  
  const [notes, setNotes] = useState('')
  

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
          image={data.reference_image_id}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {`Breed Name: ${data.name}`}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            `Breed Group: ${data.breed_group}`
            `Life Span: ${data.life_span}`
            `Weight: ${data.weight.metric} Kg`
            `Height: ${data.height.metric} m`
            `Temperament: ${data.temperament}`
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
}

export default ResultsTile
