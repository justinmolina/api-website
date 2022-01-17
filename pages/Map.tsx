import React, {useEffect, useState} from 'react'
import {Client} from '@googlemaps/google-maps-services-js';
import GoogleMapReact from 'google-map-react'

import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

async function initMap() {
  const client = new Client({})
  await client.geocode({
    params: {
      key: 'AIzaSyALslfhi_BEaxbZuhEYjVXXtc-8tEnP73c',
      address: '107-24 71st rd 11375'
    },
    timeout: 1000,
  }).catch((error) => {
    console.log('error: ', error)
    return false;
  })

  return true
}

const Map = () => {
  const [address, setAddress] = useState('')
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    let isLoaded = initMap()
    console.log(isLoaded)
  },[])

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALslfhi_BEaxbZuhEYjVXXtc-8tEnP73c&libraries=places"></script>

      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={setAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                // eslint-disable-next-line react/jsx-key
                  <div

                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  )
}

export default Map