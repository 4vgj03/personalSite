import React, { useState } from 'react';

const BandGenerator = () => {
  const [adjective, setAdjective] = useState('');
  const [noun, setNoun] = useState('');

  const adj = ['rocking', 'awesome', 'cool', 'fantastic']; // Sample adjectives
  const nouns = ['band', 'group', 'ensemble', 'crew']; // Sample nouns

  const generateBandName = () => {
    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    setAdjective(randomAdj);
    setNoun(randomNoun);
  };

  return (
    <div>
      <h1>Band Name Generator</h1>
      <button onClick={generateBandName}>Generate Band Name</button>
      <p>Band Name: {adjective} {noun}</p>
    </div>
  );
  
};

export default BandGenerator;
