import ResultsTile from "../components/ResultsTile";
import MultipleSelect from "../components/MultipleSelect";

const Results = () => {
  return (
    <>
      <div>
        <MultipleSelect/>
      </div>
      <div>
        <ResultsTile component={"img"} src={"string"}/>
      </div>
    </>
  )
}

export default Results
