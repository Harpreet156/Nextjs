import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APIData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>API Data Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default APIData;
