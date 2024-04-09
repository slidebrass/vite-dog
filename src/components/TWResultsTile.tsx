// Attempt to use TailWindCSS to create reusable card
import { BreedDetailsProps } from '../types/breedDetailsProps';

import { ChangeEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useAuth0 } from '@auth0/auth0-react';

// Passing in breedDetails from Results.tsx to populate the <Card>
const TWResultsTile = ({ breedDetails }: { breedDetails: BreedDetailsProps }) => {
  const { register, handleSubmit } = useForm({})
  const { user } = useAuth0();


  // setting up state for the notes users can write if they wish to save a breed as a favorite
  const [notes, setNotes] = useState<string>('')

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
  }

  return (
    <div>
      {breedDetails
        ? (
          <form onSubmit={handleSubmit(onSubmitFavorite)}
            className='flex flex-direction-row py-5 justify-center'
          >
            <article className='rounded-xl border border-gray-700 bg-[#EFF2C0] p-4 w-3/4'>
              <div className='flex items-center gap-4'>
                <img 
                  alt='picture of the chosen breed'
                  src={breedDetails.url}
                  // TODO: fix flex of image
                  className='flex max-w-lg rounded-full object-contain'
                />

                <div>
                  <h3 className='text-lg font-medium text-[#D62828]'>
                    {`Breed Name: ${breedDetails.breeds[0].name}`}
                  </h3>

                  <div className='flow-root'>
                    <ul className='m-1 flex flex-wrap'>
                      <li className='p-1 leading-none'>
                        <a href='#' className='text-xs font-medium text-gray-700'>
                          Adoptable Pets for this Breed
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className='mt-4 space-y-2'>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Breed Name: ${breedDetails.breeds[0].name}`}
                  </h5>
                </li>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Breed Group: ${breedDetails.breeds[0].breed_group}`}
                  </h5>
                </li>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Life Span: ${breedDetails.breeds[0].life_span}`}
                  </h5>
                </li>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Weight: ${breedDetails.breeds[0].weight} Kg`}
                  </h5>
                </li>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Height: ${breedDetails.breeds[0].height} cm`}
                  </h5>
                </li>
                <li>
                  <h5 className='text-[#D62828]'>
                    {`Temperament: ${breedDetails.breeds[0].temperament}`}
                  </h5>
                </li>
              </ul>
              <div>
                <label className='mx-2' htmlFor='notesele'>Notes:</label>
              </div>
              <div className='flex justify-center'>
                <textarea
                  className='box-border w-9/12 rounded-md border-2 border-[#D62828] text-black p-2'
                  {...register('notes')}
                  name='note'
                  value={notes}
                  id='notesele'
                  onChange={handleNoteChange}
                  placeholder='Add notes about this breed here if you would like to add it to your favorites.'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  id='favorite-button'
                  disabled={notes.length === 0}
                  // TODO: add disabled color scheme
                  className='p-2 m-2 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md text-[#003049] hover:text-white'
                >
                  Add Favorite
                </button>
              </div>
            </article>
          </form>
        ) : (null)
      }
    </div>
  )
}

export default TWResultsTile;