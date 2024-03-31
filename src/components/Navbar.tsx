import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

  const [isVisible, setIsVisible] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const signOutOnClick = () => {
    logout();
  }

  const signInOnClick = () => {
    loginWithRedirect();
  }

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-[#EAE2B7] p-6 sticky top-0 w-full z-10'>
      <div className='flex items-center flex-shrink-0 text-[#003049] hover:text-[#D62828] mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight'>
          Dog Breeds
        </Link>
      </div>
      <div className='block'>
        <button onClick={dropDown} className='flex items-center px-3 py-2 
          text-[#003049] border rounded border-[#003049] hover:text-[#D62828] 
          hover:border-[#D62828]'
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      {isVisible ? (
        <div className='w-full block flex-grow items-center mt-2'>
          <div className="text-sm lg:flex-grow border-[#003049] border-2 rounded-md">
            <button className='p-3 m-5 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md'>
              <div>
                <Link to='' onClick={clicked} className='flex place-itmes-center mt-4 
                lg:inline-block lg:mt-0 text-[#003049] hover:text-[#EAE2B7]'
                >
                  Home
                </Link>
              </div>
            </button>

            {
              !isAuthenticated ?
                <button className='p-3 m-5 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md'>
                  <div>
                    <Link to='/' onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-[#003049] hover:text-[#EAE2B7]'>
                      Login
                    </Link>
                  </div>
                </button>
                :
                <>
                  <button className='p-3 m-5 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md'>
                    <div>
                      <Link to='/search' onClick={clicked} className='flex place-itmes-center mt-4 
                        lg:inline-block lg:mt-0 text-[#003049] hover:text-[#EAE2B7]' 
                      >
                        Search
                      </Link>
                    </div>
                  </button>
                  <button className='p-3 m-5 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md'>
                    <div>
                      <Link to='/favorites' onClick={clicked} className='flex place-itmes-center mt-4 
                        lg:inline-block lg:mt-0 text-[#003049] hover:text-[#EAE2B7]'
                      >
                        Favorites
                      </Link>
                    </div>
                  </button>
                  <button className='p-3 m-5 bg-[#FCBF49] hover:bg-[#F77F00] justify-center border-[#D62828] border rounded-md'>
                      <div>
                          <Link to='/' onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-[#003049] hover:text-[#EAE2B7]'>
                              Logout
                          </Link>
                      </div>
                  </button>
                </>
            }
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  )
}

export default Navbar
