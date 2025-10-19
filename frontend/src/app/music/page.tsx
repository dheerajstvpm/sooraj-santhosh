import React from 'react';
import Layout from '../../components/Layout';

const Music: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Music</h1>
      <p className="text-lg">
        Explore the diverse collection of songs and albums by Sooraj Santhosh.
      </p>
      {/* Music content will be dynamically loaded here */}
    </Layout>
  );
};

export default Music;