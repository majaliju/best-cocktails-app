import MapboxMap from './MapboxMap';
import UserAddressForm from './UserAddressForm';
import { useContext, useEffect } from 'react';
import { user, UserProvider, UserContext } from '../context/user';
import { bars, BarsProvider, BarsContext } from '../context/bars';
import {
  LoggedInContext,
  loggedIn,
  loggedInContext,
} from '../context/loggedIn';
import {
  addressSubmitted,
  AddressSubmittedContext,
} from '../context/addressSubmitted';
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';

function Homepage({ mapLoaded, setMapLoaded }) {
  const { user } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { addressSubmitted, setAddressSubmitted } = useContext(
    AddressSubmittedContext
  );
  const { bars } = useContext(BarsContext);

  const navigate = useNavigate();

  return (
    <div>
      {loggedIn === true ? (
        <div>
          {/* <btn>
            <Link to='/addressUpdate'>SUBMIT YOUR ADDRESS</Link>
          </btn> */}
          <h1 className='justify-center text-4xl text-secondary'>
            Welcome back {user.username}!
          </h1>
          {user.latitude === null ? (
            <div>
              <NavLink
                to='/addressUpdate'
                className='font-bold uppercase border-none btn '>
                <h3 className='font-bold uppercase'>
                  SUBMIT YOUR ADDRESS TO START!
                </h3>
              </NavLink>
            </div>
          ) : (
            <MapboxMap mapLoaded={mapLoaded} setMapLoaded={setMapLoaded} />
          )}
          {/* //&& PLACE A BUTTON OR NOTIFICATION HERE IN THE NULL ABOVE, TO PROMPT THE USER TO ENTER SOME ADDRESS MARKERS */}
        </div>
      ) : (
        <Link to='/login' replace={true}>
          <button className='gap-2 btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            Click here to log in!
          </button>
        </Link>
      )}

      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
    </div>
  );
}

export default Homepage;
