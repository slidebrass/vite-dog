// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
// import { useTheCatApi } from '../custom-hooks/FetchDogData';
import { useState } from 'react';

interface TileProps {
  component: 'img'
  src: 'string'
}

const ResultsTile = ( props: TileProps, data: any ) => {
  /** need some way to pass in the data retrieved from FetchDogData */
  /** need a way to submit information to add favorites */
  const [notes, setNotes] = useState('')

  data.map((data) => {})

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            `Breed Name: ${data.name}`
            `Breed Group: ${data.breed_group}`
            `Life Span: ${data.life_span}`
            `Weight: ${data.weight.metric} Kg`
            `Height: ${data.height.metric} m`
            `Temperament: ${data.temperament}`
          </Typography>
        </CardContent>
        <div>
          <label htmlFor='notes'>Notes</label>
          <Input {...notes('notes')} name='notes' placeholder='Add notes about this breed here if you would like to add it to your favorites.' />
        </div>
        <CardActions>
          <ConButton 
            className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
          >
            Add Favorite
          </ConButton>
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
