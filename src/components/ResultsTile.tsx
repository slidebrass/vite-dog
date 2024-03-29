// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';
import { useEffect, useState } from 'react';
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

  const handleNoteChange = (event: SelectChangeEvent<string>) => {
    setNotes (event.target.value)
    console.log(notes)
  }
  console.log(breedDetails)

// TODO: setId from user.id
  const onSubmitFavorite = (data: any, event: any) => {
    if (event) event.preventDefault()
    console.log('submitting')
    // console.log(id)
    console.log(data['notes'])
    console.log(breedDetails.breeds[0].reference_image_id)
    console.log(user?.sub)
    server_calls.create_note({
      'notes': data['notes'],
      'image_id': breedDetails.breeds[0].reference_image_id,
      'user_id': user?.sub
    })
    // fetch ('http://127.0.0.1:5000/api/notes', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   {'x-access-token': }
    //   body: JSON.stringify({
    //     notes: {notes},
    //     image_id: breedDetails.breeds[0].reference_image_id
    //   })}) 
    //   .then((res: {json: () => any }) => res.json())
    //   .then((data) => {console.log(data); server_calls.create_note(data)})
      // .catch((error) => {console.error(error)})
      // .then(server_calls.create_note(res))
    
    
// notes, id, image_id, breedNotes_Id
  }

  return (
    <div className='bg-gray-200'>
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
                <label className='mx-2' htmlFor='notes'>Notes:</label>
              </div>
              <div className='pr-7 bg-[#EAE2B7]'>
                <Input {...register('notes')} 
                  name='notes' 
                  onChange={handleNoteChange}
                  sx={{mx: 2}} 
                  placeholder='Add notes about this breed here if you would like to add it to your favorites.' 
                />
              </div>
              <CardActions 
                className='justify-end bg-[#EAE2B7]'
                sx={{pr: 2}}
              >
                {/* TODO: add success or page reload */}
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
