// Need a reusable tile to display dog image, dog breed, and various attributes of the dog.
// Will also include sections for the user to make notes and do CRUD operations somehow.

import { Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Typography } from "@mui/material"
import ConButton from "./ConButton"
import Input from "./Input"
import { useGetFavData } from "../custom-hooks/FetchFavData"
import useGetFavList from "../custom-hooks/FetchFavList"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"

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
  id: string;
  image_id: string;
}

// TODO: should be passing in favList
const FavoritesTile = ({ FavoritesList }: { FavoritesList: BreedDetailsProps}) => {

  const { register, handleSubmit } = useForm({})

  // the actual notes the user is typing in
  const [favNotes, setFavNotes] = useState<string>('')
  // List of favorited dog breeds by the user
  const [favList, setFavList] = useState<FavoritesList[]>([])
  // Data to fill FavoritesTile
  const { dogFavData, getFavData } = useGetFavData({})

  // on mount, retrieves all favorited breeds by the current user
  // taken care of in Favorites.tsx

  const handleFavNotesChange = (event: SelectChangeEvent<string>) => {
    setFavNotes(event.target.value)
    window.location.reload()
  }

  const deleteFav = () => {
    server_calls.delete_note(favList[{ key }].breedNotes_Id)
    window.location.reload()
  }

  const onSubmitUpdate = (data: any, event: any) => {
    if (favNotes) {
      server_calls.update_note(favList.breedNotes_Id, favNotes)
    }
  }

  return (
    <div className="bg-gray-200">
      {breedDetails
        ? (
          <form 
            onSubmit={handleSubmit(onSubmitUpdate)}
            className="py-5"
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
                <Input
                  {...register('notes')}
                  name='notes'
                  // value={ favNotes }
                  onChange={handleFavNotesChange}
                  sx={{mx: 2}}
                  placeholder='Add notes about this breed here if you would like to add it to your favorites.'
                />
              </div>
              <div className='content-between bg-[#EAE2B7]'>
                <CardActions className='flex justify-end mr-5'>
                  <ConButton
                    type='submit'
                    id='favorite-update'
                    disabled={favNotes.length === 0}
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
