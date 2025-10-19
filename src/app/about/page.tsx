import React from 'react';
import Layout from '../../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">About Sooraj Santhosh</h1>
      <p className="text-lg">
        Sooraj Santhosh is a renowned Indian playback singer. He has sung in various languages
        including Malayalam, Tamil, Telugu, and Kannada. Known for his soulful voice and versatile
        singing style, Sooraj has captivated audiences worldwide.
      </p>
      {/* Add more biography content here */}
    </Layout>
  );
};

export default About;