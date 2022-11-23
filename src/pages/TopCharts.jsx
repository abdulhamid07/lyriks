import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFething, error } = useGetTopChartsQuery()


  if (isFething) return <Loader title={'Loading top chart'} />
  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts;
