// Need a reusable tile to display dog image, dog breed, and various attributes of the dog.
// Will also include sections for the user to make notes and do CRUD operations.

import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import ConButton from "./ConButton"
import Input from "./Input"
import { FavoriteType } from "../types/favorites"

import React, { useState, useEffect, ChangeEventHandler } from "react"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
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


// List of favorited dog breeds by the user being passed in
const FavoritesTile: React.FC<FavoriteType> = ( favList ) => {

  const { register, handleSubmit } = useForm({})

  // the actual notes the user is typing in
  const [favNotes, setFavNotes] = useState('')
  // notes loaded onto the card for display
  const [prevNotes, setPrevNotes] = useState(favList.notes)

  // Data to fill FavoritesTile
  const [favData, setFavData] = useState<BreedDetailsProps>()

  const getFavData = async () => {
    const data = await dog_server_calls.get_image_data(favList.image_id)
    setFavData(data)
  }
  useEffect( () => {
    getFavData()
  }, [])
  // on mount, retrieves all favorited breeds by the current user
  // taken care of in Favorites.tsx

  const handleFavNotesChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setFavNotes(event.target.value)
  }

  // TODO: change state of favList; currently deletes breed but does not remove tile until page refreshes
  const deleteFav = () => {
    server_calls.delete_note(favList.breedNotes_Id)
    setFavData(undefined)
  }

  const onSubmitUpdate = (data: any, event: any) => {
    if (event) event.preventDefault()
    server_calls.update_note(favList.breedNotes_Id, data['notes'])
    setPrevNotes(favNotes)
    setFavNotes('')
  }

  return (
    <div className="bg-gray-300">
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
                  {`Previously written notes: ${prevNotes}`}
                </Typography>
              </CardContent>
              <div className='bg-[#EAE2B7]'>
                <label className='mx-2' htmlFor='notesele'>Notes:</label>
              </div>
              <div className="bg-[#EAE2B7]">
                <div className="flex justify-center w-250">
                  <textarea
                    className="box-border w-9/12 rounded-md border-2 border-[#D62828] text-black p-2"
                    {...register('notes')}
                    name='note'
                    id="notesele"
                    value={ favNotes }
                    onChange={handleFavNotesChange}
                    placeholder='Add notes about this breed here if you would like to change what you wrote.'
                  />
                </div>
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
                  <ConButton onClick={deleteFav} type='button' id='favorite-delete'
                    className='flex justify-start bg-slate-300 p-2 rounded hover:gl-slate-800 text-white'
                  >
                    Delete Favorite
                  </ConButton>
                </CardActions>
              </div>
            </Card>
          </form>
        ) : null
      }
    </div>
  )
}

export default FavoritesTile
