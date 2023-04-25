// code came from this mapbox direct tutorial
// https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/

import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { user, UserProvider, UserContext } from '../context/user';

export default function UserAddressForm() {
  const { user } = useContext(UserContext);

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');

  console.log('address in this component: ', address);

  return (
    <form>
      <AddressAutofill accessToken='pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA'>
        <div className='w-full max-w-xs form-control'>
          <label className='label'>
            <span className='label-text'>Type in an address...</span>
            <span className='label-text-alt'>Address</span>
          </label>
          <input
            name='address'
            placeholder='Address'
            type='text'
            onChange={(e) => setAddress(e.target.value)}
            autoComplete='address-line1'
            className='w-full max-w-xs input input-bordered'
          />
        </div>
      </AddressAutofill>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your city</span>
          <span className='label-text-alt'>City</span>
        </label>
        <input
          name='city'
          placeholder='City'
          type='text'
          onChange={(e) => setCity(e.target.value)}
          autoComplete='address-level2'
          className='w-full max-w-xs input input-bordered'
        />
      </div>
      {/* 
      <input
        name='state'
        placeholder='State'
        type='text'
        autoComplete='address-level1'
      /> */}
      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your state</span>
          <span className='label-text-alt'>State</span>
        </label>
        <input
          name='state'
          placeholder='State'
          type='text'
          onChange={(e) => setState(e.target.value)}
          autoComplete='address-level2'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      {/* <input
        name='country'
        placeholder='Country'
        type='text'
        autoComplete='country'
      /> */}
      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your country</span>
          <span className='label-text-alt'>Country</span>
        </label>
        <input
          name='country'
          placeholder='Country'
          type='text'
          onChange={(e) => setCountry(e.target.value)}
          autoComplete='country'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      {/* <input
        name='postcode'
        placeholder='Postcode'
        type='text'
        autoComplete='postal-code'
      /> */}
      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your postal/zip code</span>
          <span className='label-text-alt'>Postal Code</span>
        </label>
        <input
          name='postcode'
          placeholder='Postcode'
          type='text'
          onChange={(e) => setPostcode(e.target.value)}
          autoComplete='postal-code'
          className='w-full max-w-xs input input-bordered'
        />
      </div>
    </form>
  );
}
