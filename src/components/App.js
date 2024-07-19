import React, { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState(null); // Change to null since it's a single image
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random") // Removed the extra comma
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data to the console
        setImage(data.message); // Access the image URL from the API response
        setIsLoaded(true);
      });
  }, []);
  
  if (!isLoaded) return <p>Loading...</p>;

  return <img src={image} alt="A Random Dog" />; // Render the image correctly
}

export default App;
