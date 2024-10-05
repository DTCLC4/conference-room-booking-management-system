import React, { useEffect, useState } from 'react';

const Content: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}

export default Content;
