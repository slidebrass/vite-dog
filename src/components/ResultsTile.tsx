// Need to create a reusable tile with fields populated by the 3rd party API. 
// Will include image, breed name, and description of breed.
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ConButton from './ConButton';
import Input from './Input';

interface TileProps {
  /** MediaCard Props? */
}

const ResultsTile = ( props: TileProps ) => {
  const /** need some way to pass in the data retrieved from FetchDogData */
  const /** need a way to submit information to add favorites */

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
            {data.breed_name}
          </Typography>
        </CardContent>
        <div>
          <label htmlFor='notes'>Notes</label>
          <Input {...register('notes')} name='notes' placeholder='Add notes about this breed here if you would like to add it to your favorites.' />
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
