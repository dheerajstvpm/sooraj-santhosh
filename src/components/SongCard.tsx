import React from 'react';

interface SongCardProps {
  title: string;
  album: string;
  releaseDate: string;
  streamingLinks: { platform: string; url: string }[];
}

const SongCard: React.FC<SongCardProps> = ({ title, album, releaseDate, streamingLinks }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">Album: {album}</p>
      <p className="text-gray-600 dark:text-gray-400">Released: {releaseDate}</p>
      <div className="mt-2">
        {streamingLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-2"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SongCard;