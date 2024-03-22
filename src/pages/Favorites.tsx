import { Key } from "react"
import FavoritesTile from "../components/FavoritesTile"

function Favorites() {
  return (
    <div>
      <div className="favorites-tiles">
        {/* get request from get_notes */}
        {data.map((item: { breedNotes_Id: string; notes: string; id: string; breed_info_id: string }, index: Key | null | undefined) => (
          <FavoritesTile 
            key={index} 
            breedNotes_Id={item.breedNotes_Id} 
            notes={item.notes}
            id={item.id}
            breed_info_id={item.breed_info_id}
          />
        ))}
      </div>      
    </div>
  )
}

export default Favorites
