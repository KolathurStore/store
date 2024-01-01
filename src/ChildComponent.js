// src/ChildComponent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ChildComponent = () => {
  // Use the useParams hook to access URL parameters
  const { urc } = useParams();
  const { username } = useParams();
  
  console.log('{ password }',{ urc })
  console.log('username',{username})
  const { userId } = useParams();
  console.log('userId',{userId})

  var urls= ""+{ urc }
  urls= urls.replace(/Q~~~Q/g, "/");
  var replacedString = urls.replace(/Q~~~Q/g, '/');

console.log("replacedString",replacedString);
  console.log('wait',urc,username,urls)
  const myArray = urls.split("~~~~");
  console.log('myArray',myArray)

  return (
    <div>
      <h1>Child Component</h1>
      <p>{userId}</p>
      <p>{username}</p>
      <p>{urc}</p>
    </div>
  );
};

export default ChildComponent;
