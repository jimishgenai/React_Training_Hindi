import React from 'react';
import { RouterProvider } from 'react-router';
import router from './router-Components/router.jsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
