import { RouterProvider } from 'react-router-dom';
import router from './router-Components/router.jsx';
import { UserContext } from './customContex/UserContext.js';
import UserProfile from './customContex/UserProfile.jsx';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'test@test.com',
    age: 30,
  });

    return (
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    );
}

export default App;

