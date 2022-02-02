import React from 'react';
import MicroFrontend from './MicroFrontend';

// const {
//   REACT_APP_Travel_HOST: travelHost,
// } = process.env;

// temp:
const travelHost = 'http://localhost:3001';

const Travel = () => {
    return <MicroFrontend host={travelHost} appName="Travel" />
};

export default Travel;
