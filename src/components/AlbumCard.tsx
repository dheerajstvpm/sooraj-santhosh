import React from 'react';

interface AlbumCardProps {
  title: string;
  releaseDate: string;
  coverArt: string;
  tracklist: string[];
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, releaseDate, coverArt, tracklist }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={coverArt} alt={`${title} Cover`} className="w-32 h-32 object-cover rounded-md mb-2" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">Released: {releaseDate}</p>
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        <p className="font-semibold">Tracklist:</p>
        <ul className="list-disc list-inside">
          {tracklist.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumCard;