// Need a reusable tile to display dog image, dog breed, and various attributes of the dog.
// Will also include sections for the user to make notes and do CRUD operations somehow.

import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from "@mui/material"
import ConButton from "./ConButton"
import Input from "./Input"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useAuth0 } from "@auth0/auth0-react"
import { dog_server_calls } from "../api/dog_server"

interface BreedDetailsProps {
  url: string;
  breeds: [{
    name: string;
    breed_group: string;
    life_span: string;
    height: { metric: string };
    weight: { metric: string };
    temperament: string;
    reference_image_id: string;
  }]
}

interface FavoritesList {
  breedNotes_Id: string;
  notes: string;
  user_id: string;
  image_id: string;
}
// List of favorited dog breeds by the user being passed in
const FavoritesTile = ({ favList }: { favList: FavoritesList}) => {

  const { register, handleSubmit } = useForm({})
  // TODO: define current user
  const { user } = useAuth0()

  // TODO: load favData on mount
  // the actual notes the user is typing in
  const [favNotes, setFavNotes] = useState<string>('')
  const notesRef = useRef(favNotes)

  // Data to fill FavoritesTile
  const [favData, setFavData] = useState<BreedDetailsProps>()

  const getFavData = async () => {
    const data = await dog_server_calls.get_image_data(favList.image_id)
    console.log(`Writing data: ${data}`)
    setFavData(data)
  }
  useEffect( () => {
    getFavData()
  }, [])
  // on mount, retrieves all favorited breeds by the current user
  // taken care of in Favorites.tsx

  const handleFavNotesChange = (event: SelectChangeEvent<string>) => {
    setFavNotes(event.target.value)
    window.location.reload()
  }

  // reenable and fix "key"
  // const deleteFav = () => {
  //   server_calls.delete_note(favList[{ key }].breedNotes_Id)
  //   window.location.reload()
  // }

  // TODO: doublecheck these parameters
  const onSubmitUpdate = (data: any, event: any) => {
    if (favNotes) {
      server_calls.update_note(favList.breedNotes_Id, favNotes)
    }
  }

  return (
    <div className="bg-gray-200">
      {favData
        ? (
          <form 
            onSubmit={handleSubmit(onSubmitUpdate)}
            className="py-5"
          >
            <Card className='items-center mx-auto' sx={{ maxWidth: 750 }}>
              <CardMedia 
                className='bg-[#EFF2C0]'
                component='img'
                image={favData.url}
              />
              <CardContent className='bg-[#D62828]'>
                <Typography gutterBottom variant='h5' component='div'>
                  {`Breed Name: ${favData.breeds[0].name}`}
                </Typography>
              </CardContent>
              <CardContent className='bg-[#FCBF49]'>
                <Typography variant='body2'>
                  {`Breed Group: ${favData.breeds[0].breed_group}`}
                </Typography>
                <Typography variant='body2'>
                  {`Life Span: ${favData.breeds[0].life_span}`}
                </Typography>
                <Typography variant='body2'>
                  {`Weight: ${favData.breeds[0].weight.metric} Kg`}
                </Typography>
                <Typography variant='body2'>
                  {`Height: ${favData.breeds[0].height.metric} cm`}
                </Typography>
                <Typography variant='body2'>
                  {`Temperament: ${favData.breeds[0].temperament}`}
                </Typography>
                <Typography variant="body2">
                  {`Previously written notes: ${notesRef}`}
                </Typography>
              </CardContent>
              <div className='bg-[#EAE2B7]'>
                <label className='mx-2' htmlFor='notes'>Notes:</label>
                <Input
                  {...register('notes')}
                  name='notes'
                  // value={ favNotes }
                  onChange={handleFavNotesChange}
                  sx={{mx: 2}}
                  placeholder='Add notes about this breed here if you would like to change what you wrote.'
                />
              </div>
              <div className='content-between bg-[#EAE2B7]'>
                <CardActions className='flex justify-end mr-5'>
                  <ConButton
                    type='submit'
                    id='favorite-update'
                    className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
                  >
                    Edit Favorite
                  </ConButton>
                  {/* <ConButton onClick={deleteFav} type='button' id='favorite-delete'
                    className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
                  >
                    Delete Favorite
                  </ConButton> */}
                </CardActions>
              </div>
            </Card>
            {/* <Card className='items-center mx-auto pt-2 ' sx={{ maxWidth: 500 }}>
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
            <Input {...register('note_input')} name='note_input' onChange={ handleFavNotesChange }
              placeholder='Add notes about this breed here if you would like to add it to your favorites.' 
            />
          </div>
          <div className='content-between bg-slate-200'>
            <CardActions className='flex justify-end mr-5'>
              <ConButton type='submit' id='favorite-update'
                className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
              >
                Edit Favorite
              </ConButton>
              <ConButton onClick={deleteFav} type='button' id='favorite-delete'
                className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
              >
                Delete Favorite
              </ConButton>
            </CardActions>
          </div>
        </Card> */}
          </form>
        ) : null
      }
    </div>
  )
}

export default FavoritesTile
