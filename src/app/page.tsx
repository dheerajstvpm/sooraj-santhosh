import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Sooraj Santhosh&apos;s Official Website</h1>
        <p className="mt-4 text-lg">Explore the world of music, videos, and tour dates.</p>
        {/* Add more content here */}
      </div>
    </Layout>
  );
};

export default Home;