import React from 'react';
import Layout from '../../components/Layout';

const Tour: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Tour Dates</h1>
      <p className="text-lg">
        Check out upcoming performances and events.
      </p>
      {/* Tour dates will be dynamically loaded here */}
    </Layout>
  );
};

export default Tour;