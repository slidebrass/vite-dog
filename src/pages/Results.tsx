import { useState } from "react";

import ResultsTile from "../components/ResultsTile";
import MultipleSelect from "../components/MultipleSelect";
import { BreedDetailsProps } from "../types/breedDetailsProps";

// interface BreedDetailsProps {
//   url: string;
//   breeds: [{
//     name: string;
//     breed_group: string;
//     life_span: string;
//     height: {metric: string};
//     weight: {metric: string};
//     temperament: string;
//     reference_image_id: string;
//   }]
// }

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
      {breedDetails
        ? (
          <div>
            <ResultsTile 
              breedDetails = { breedDetails as BreedDetailsProps}
            />
          </div>
        ) : (
          // Do I store breeds searched in a database and perform queries to display data?
          <div className="bg-gray-200">Top 10 Searched Breeds</div>
        )
      }
      
    </>
  )
}

export default Results
