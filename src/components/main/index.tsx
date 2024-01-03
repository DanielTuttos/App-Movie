import React from 'react';

interface MainProps {
  url: string;
}

const Main: React.FC<MainProps> = ({ url }) => {
  return <div>{url}</div>;
};

export default Main;
