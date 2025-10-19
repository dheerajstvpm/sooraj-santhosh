import React from 'react';

interface VideoCardProps {
  title: string;
  url: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, url, thumbnail }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={thumbnail} alt={`${title} Thumbnail`} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-xl font-bold">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Watch Video
      </a>
    </div>
  );
};

export default VideoCard;