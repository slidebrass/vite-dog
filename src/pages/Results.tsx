import ResultsTile from "../components/ResultsTile";
import MultipleSelect from "../components/MultipleSelect";
import { useState } from "react";

const Results = () => {
  // props stored in state
  // const [name, setName] = useState('bob')
  const [breedDetails, setBreedDetails] = useState<ResultsTileProps2>()

  interface ResultsTileProps2 {
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



  return (
    <>
      <div>
        <MultipleSelect/>
      </div>
      <div>
        <ResultsTile 
          // url = {breedDetails.url}
          // breeds[0]{name} = {breedDetails.breeds[0].name}
        />
      </div>
    </>
  )
}

export default Results
