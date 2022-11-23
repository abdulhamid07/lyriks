import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';

const Search = () => {

  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFething, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFething) return <Loader title={'Loading top chart'} />
  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs?.map((song, i) => (
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

export default Search;
