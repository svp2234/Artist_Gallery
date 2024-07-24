import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path if needed
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './App.css';

const ArtList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'uploads'));
        const artList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArtworks(artList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Meta &#128075;</h1>
      <Link to='/uploadform' className="nav-link">Upload</Link>
      <h1>Art Gallery &#127912;</h1>
      <ul>
        {artworks.map(art => (
          <div key={art.id}>
            <img src={art.fileUrl} alt={art.artname} style={{ width: '200px', height: 'auto' }} />
            <h4>Art Name: {art.artname}</h4>
            <h4>Artist: {art.authorname}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArtList;
