import ResultsTile from "../components/ResultsTile";
import MultipleSelect from "../components/MultipleSelect";
import { useState } from "react";

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

const Results = () => {
  // props stored in state
  const [breedDetails, setBreedDetails] = useState<BreedDetailsProps>()

  



  return (
    <>
      <div>
        <MultipleSelect
          setBreedDetails = { setBreedDetails }
        />
      </div>
      <div>
        <ResultsTile 
          breedDetails = { breedDetails }
        />
      </div>
    </>
  )
}

export default Results
