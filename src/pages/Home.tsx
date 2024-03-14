// import Background
import SearchBar from "../components/MultipleSelect"

function Home() {
  return (
    <div
      // style={{ backgroundImage: `url(${ Background })`}}
      className= 'flex justify-center mx-auto bg-cover bg-fixed'
    >
      <div className="flex flex-row h-screen">
        <h3 className="p-5 bg-white bg-opacity-50 text-black rounded">Learn about dog breeds!</h3>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        {/* link to search/results page */}
      </div>
      <div>
        {/* link to favorites page */}
      </div>
    </div>
  )
}

export default Home
