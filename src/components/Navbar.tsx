import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

    const [ isVisible, setIsVisible ] = useState(false)
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
    <nav className='flex items-center justify-between flex-wrap bg-[#EFF2C0] p-6'>
      <div className='flex items-center flex-shrink-0 text-[#080F0F] hover:text-[#A52422] mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight'>
            Dog Breeds
        </Link>
      </div>
      <div className='block'>
        <button onClick={dropDown} className='flex items-center px-3 py-2 
          text-[#723D46] border rounded border-[#080F0F] hover:text-[#A52422] 
          hover:border-[#E26D5C]'
        >
            <i className='fas fa-bars'></i>
        </button>
      </div>
      { isVisible ? (
      <div className='w-full block flex-grow items-center'>
        <div className="text-sm lg:flex-grow">
          <button className='p-3 m-5 bg-[#BEA57D] hover:bg-[#A4BAB7] justify-center border-[#A52422] border-2'>
            <div>
              <Link to='/' onClick={clicked} className='flex place-itmes-center mt-4 
                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#A52422]' 
              >
                Home
              </Link>
            </div>
          </button>
          <button className='p-3 m-5 bg-[#BEA57D] hover:bg-[#A4BAB7] justify-center border-[#A52422] border-2'>
            <div>
              <Link to='/search' onClick={clicked} className='flex place-itmes-center mt-4 
                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#A52422]' 
              >
                Search
              </Link>
            </div>
          </button>
          <button className='p-3 m-5 bg-[#BEA57D] hover:bg-[#A4BAB7] justify-center border-[#A52422] border-2'>
            <div>
              <Link to='/favorites' onClick={clicked} className='flex place-itmes-center mt-4 
                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#A52422]'
              >
                Favorites
              </Link>
            </div>
          </button>
          {
            !isAuthenticated ?
            <button className='p-3 m-5 bg-[#BEA57D] hover:bg-[#A4BAB7] justify-center border-[#A52422] border-2'>
                <div>
                    <Link to='/' onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#A52422]'>
                        Login
                    </Link>
                </div>
            </button>
            :
            <button className='p-3 m-5 bg-[#BEA57D] hover:bg-[#A4BAB7] justify-center border-[#A52422] border-2'>
                <div>
                    <Link to='/' onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#A52422]'>
                        Logout
                    </Link>
                </div>
            </button>
          }
        </div>
      </div>
        ) : (
            <></>
        ) }
    </nav>
  )
}

export default Navbar
