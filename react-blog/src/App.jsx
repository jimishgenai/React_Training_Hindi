import { RouterProvider } from 'react-router-dom';
import router from './router-Components/router.jsx';
import { UserContext } from './customContex/UserContext.js';
import { useState } from 'react';
// Store holds all Redux data
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/practice/features/counters/CounterSlice.js';



function App() {
  const initialMockUser = [{
    name: 'John Doe',
    email: 'test@test.com',
    age: 30,
  }];

  const [user, setUser] = useState(initialMockUser);
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    );
}

export default App;