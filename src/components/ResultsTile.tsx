// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';


// interface NoteProps {
//   name: string;
// }

// interface ResultsTileProps {
//   url: string;
//   breeds: [{
//     name: string;
//     breed_group: string;
//     life_span: string;
//     height: {metric: string};
//     weight: {metric: string};
//     temperament: string;
//     reference_image_id: string;
//   }];

// }

// interface ResultsTileProps2 {
//   url: string;
//   breeds: [{
//     name: string;
//     breed_group: string;
//     life_span: string;
//     height: {metric: string};
//     weight: {metric: string};
//     temperament: string;
//     reference_image_id: string;
//   }]
// }

// trying to pass in breedDetails from Results.tsx to populate the <Card>
const ResultsTile = ({ breedDetails }) => {
  const { register, handleSubmit } = useForm({})  

  // setting up state for the notes users can write if they wish to save a breed as a favorite
  const [notes, setNotes] = useState<string>('')
  
  const handleNoteChange = (event: SelectChangeEvent<string>) => {
    let note = event.target.value
    setNotes(
      note
    )
  }


  // How do I store, submit, or add to data the current user id?
  // Same with breed_info_id or dict_breed_id
  const onSubmitFavorite = (data: string, event: any) => {
    if (event)event.preventDefault()
    console.log('submitting')
    server_calls.create_note(data)
      
  }

  return (
    <div className='bg-gray-500'>
      <form onSubmit={handleSubmit(onSubmitFavorite)}>
        <Card className='items-center mx-auto pt-2 ' sx={{ maxWidth: 500 }}>
            <CardMedia
              className='bg-slate-200'
              component='img'
              // TypeError: Cannot read properties of undefined (reading 'url')
              image={breedDetails.url}
            />
            <CardContent className='bg-slate-200'>
              <Typography gutterBottom variant='h5' component='div'>
                {`Breed Name: ${breedDetails.breeds[0].name}`}
              </Typography>
            </CardContent>
            <CardContent className='bg-slate-300'>
              <Typography variant='body2' color='text.secondary'>
                {`Breed Group: ${breedDetails.breeds[0].breed_group}`}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`Life Span: ${breedDetails.breeds[0].life_span}`}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`Weight: ${breedDetails.breeds[0].weight.metric} Kg`}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`Height: ${breedDetails.breeds[0].height.metric} cm`}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`Temperament: ${breedDetails.breeds[0].temperament}`}
              </Typography>
            </CardContent>
            <div>
              <label htmlFor='notes'>Notes</label>
              <Input {...register('note_input')} name='note_input' onChange={ handleNoteChange }
                placeholder='Add notes about this breed here if you would like to add it to your favorites.' />
            </div>
            <CardActions>
              <ConButton type='submit' id='favorite-button'
                className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
              >
                Add Favorite
              </ConButton>
            </CardActions>
          </Card>
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit1)}>
        <Card className='items-center mx-auto pt-2 ' sx={{ maxWidth: 500 }}>
          <CardMedia className='bg-slate-200'
            component='img'
            image='https://cdn2.thedogapi.com/images/BFRYBufpm.jpg'
          />
          <CardContent className='bg-slate-200'>
            <Typography gutterBottom variant='h5' component='div'>
              {`Breed Name: Akita`}
            </Typography>
          </CardContent>
          <CardContent className='bg-slate-300'>
            <Typography variant='body2' color='text.secondary'>
              {`Breed Group: Working`}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {`Life Span: 10 - 14 years`}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {`Weight: 29 - 52 Kg`}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {`Height: 61 - 71 cm`}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {`Temperament: Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous`}
            </Typography>
          </CardContent>
          <div className='bg-slate-200'>
            <label className='px-2' htmlFor='notes'>Notes</label>
            <Input {...register('note_input')} name='note_input' onChange={ handleNoteChange }
              placeholder='Add notes about this breed here if you would like to add it to your favorites.' 
            />
          </div>
          <div className='content-between bg-slate-200'>
            <CardActions className='flex justify-end mr-5'>
              <ConButton type='submit' id='favorite-submit'
                className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
              >
                Add Favorite
              </ConButton>
            </CardActions>
          </div>
        </Card>
      </form> */}
    </div>
  )
}

export default ResultsTile
