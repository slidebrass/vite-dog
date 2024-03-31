import Background from '../assets/images/collage.jpeg';


function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className= 'flex justify-center mx-auto mt-bg-center bg-cover bg-local h-screen'
    >
      <div className="flex place-items-center h-screen">
        <h2 className="p-5 bg-white bg-opacity-75 text-black rounded">
          Learn about dog breeds!
        </h2>
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
