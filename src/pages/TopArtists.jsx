import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, Error, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFething, error } = useGetTopChartsQuery()


  if (isFething) return <Loader title={'Loading top chart'} />
  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artist
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((track, i) => (
          <ArtistCard
            key={track.key}
            track={track}
          />
        ))}
      </div>
    </div>
  )
}

export default TopArtists;
