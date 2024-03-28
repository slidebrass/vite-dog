import { Key, useState, useEffect } from "react"
import FavoritesTile from "../components/FavoritesTile"
import { server_calls } from "../api/server";
import { useGetFavData } from "../custom-hooks/FetchFavData";

interface favListProps {
  breedNotes_Id: string;
  notes: string;
  id: string;
  image_id: string;
}

interface FavDataProps {
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

const Favorites = () => {
  const [favList, setFavList] = useState<favListProps[]>([])
  // const { dogFavData, setFavData } = useGetFavData()

  const getFavList = async () => {
    const data = await server_calls.get_notes()
    console.log(data)
    setFavList(data)
  }
  useEffect( () => {
    getFavList()
  }, [] )
    // return favData for each tile or this handled in FavoritesTile.tsx?

  return (
    <div>
        <div className="favorites-tiles">
        {/* get request from get_notes */}
          { favList.map((item: { breedNotes_Id: string; notes: string; id: string; image_id: string }, index: Key | null | undefined) => (
            <FavoritesTile 
              key={index} 
              breedNotes_Id={item.breedNotes_Id} 
              notes={item.notes}
              id={item.id}
              image_id={item.image_id}
            />
          ))}
        </div>      
    </div>
  )
}

export default Favorites
