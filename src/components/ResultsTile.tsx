// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, Alert, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
import React, { ChangeEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useAuth0 } from '@auth0/auth0-react';


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

// interface NoteProps {
//   name: string;
// }


// Passing in breedDetails from Results.tsx to populate the <Card>
const ResultsTile = ({ breedDetails }: { breedDetails: BreedDetailsProps}) => {
  const { register, handleSubmit } = useForm({})
  const { user } = useAuth0();


  // setting up state for the notes users can write if they wish to save a breed as a favorite
  const [notes, setNotes] = useState<string>('')
  // const [id, setId] = useState<string>('')

  const handleNoteChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setNotes(event.target.value)
    console.log(notes)
  }
  console.log(breedDetails)

  const onSubmitFavorite = (data: any, event: any) => {
    if (event) event.preventDefault()
    console.log('submitting')
    // console.log(id)
    console.log(data['notes'])
    console.log(breedDetails.breeds[0].reference_image_id)
    console.log(user?.sub)
    server_calls.create_note({
      'notes': notes,
      'image_id': breedDetails.breeds[0].reference_image_id,
      'user_id': user?.sub
    })
    setNotes('')
    
    
// notes, id, image_id, breedNotes_Id
  }

  return (
    <div className='bg-gray-300'>
      {breedDetails
        ? (
          <form onSubmit={handleSubmit(onSubmitFavorite)}
            className='py-5'
          >
            <Card className='items-center mx-auto' sx={{ maxWidth: 750 }}>
              <CardMedia
                className='bg-[#EFF2C0]'
                component='img'
                image={breedDetails.url}
              />
              <CardContent className='bg-[#D62828]'>
                <Typography gutterBottom variant='h5' component='div'>
                  {`Breed Name: ${breedDetails.breeds[0].name}`}
                </Typography>
              </CardContent>
              <CardContent className='bg-[#FCBF49]'>
                <Typography variant='body2'>
                  {`Breed Group: ${breedDetails.breeds[0].breed_group}`}
                </Typography>
                <Typography variant='body2'>
                  {`Life Span: ${breedDetails.breeds[0].life_span}`}
                </Typography>
                <Typography variant='body2'>
                  {`Weight: ${breedDetails.breeds[0].weight.metric} Kg`}
                </Typography>
                <Typography variant='body2'>
                  {`Height: ${breedDetails.breeds[0].height.metric} cm`}
                </Typography>
                <Typography variant='body2'>
                  {`Temperament: ${breedDetails.breeds[0].temperament}`}
                </Typography>
              </CardContent>
              <div className='bg-[#EAE2B7]'>
                <label className='mx-2' htmlFor='notesele'>Notes:</label>
              </div>
              <div className='flex justify-center bg-[#EAE2B7]'>
                <textarea 
                  className="box-border w-9/12 rounded-md border-2 border-[#D62828] text-black p-2"
                  {...register('notes')} 
                  name='note' 
                  value={ notes }
                  id='notesele'
                  onChange={handleNoteChange}
                  placeholder='Add notes about this breed here if you would like to add it to your favorites.' 
                />
              </div>
              <CardActions 
                className='justify-end bg-[#EAE2B7]'
                sx={{pr: 2}}
              >
                {/* TODO: add success or page reload; use loading, authenticated, etc.*/}
                <ConButton 
                  type='submit' 
                  id='favorite-button'
                  disabled={notes.length === 0}
                >
                  Add Favorite
                </ConButton>
              </CardActions>
            </Card>
          </form>
        ) : null
      }
    </div>
  )
}

export default ResultsTile
