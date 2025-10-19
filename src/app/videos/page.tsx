import React from 'react';
import Layout from '../../components/Layout';

const Videos: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <p className="text-lg">
        Watch the official music videos, live performances, and more.
      </p>
      {/* Video content will be dynamically loaded here */}
    </Layout>
  );
};

export default Videos;