// src/App.jsx

import { useState, useEffect } from 'react';
import * as petService from './services/petService';
// Our new PetList import!
import PetList from './components/PetList/PetList';

const App = () => {
  const [pets, setPets] = useState([]);

  // Create a new useEffect
  useEffect(() => {
    // Create a new async function
    const fetchPets = async () => {
      try {
      // Call on the pet service's index function
      const fetchedPets = await petService.index();
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
          // Set pets state to the returned pets data
          setPets(fetchedPets);
      } catch (err) {
        console.log(err);
      }
    };
    // Invoke the function
    fetchPets();
    // Add an empty dependency array to the `useEffect()` hook.
  }, []);

  return (
    <>
      <PetList pets={pets} />
    </>
  );
};

export default App;

