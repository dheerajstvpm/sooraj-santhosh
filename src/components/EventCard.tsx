import React from 'react';

interface EventCardProps {
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, venue, city, ticketLink }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{date}</h3>
      <p className="text-gray-600 dark:text-gray-400">Venue: {venue}</p>
      <p className="text-gray-600 dark:text-gray-400">City: {city}</p>
      {ticketLink && (
        <a
          href={ticketLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Get Tickets
        </a>
      )}
    </div>
  );
};

export default EventCard;