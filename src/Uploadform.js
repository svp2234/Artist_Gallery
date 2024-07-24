import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { storage, db } from './Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './App.css';

const Uploadform = () => {
    const [item, setItem]=useState({
        authorname:'',
        artname:'',
        file:null
})
const {authorname,artname,file}={...item}

const changeHandler=e=>{
    setItem({...item,[e.target.name]:e.target.value});
};

const handleFileChange=e=>{
    setItem({...item,file:e.target.files[0]});
    //setItem(prevData => ({ ...prevData, file: null }));
}

    const submitHandler=async(e)=>{
        e.preventDefault();
        if (!file) {
          console.error("No file selected");
          return;
      }
        try{
        const uid=uuidv4();
        const fileRef = ref(storage, `uploads/${uid}`);
        await uploadBytes(fileRef, file);
        const fileUrl = await getDownloadURL(fileRef);
        const newItem = { authorname, artname, fileUrl, id: uid };
        await addDoc(collection(db, 'uploads'), newItem);
        console.log(newItem);
        }catch (error) {
          console.error('Error uploading data:', error);
        }
    };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h2>Upload Your Arts &#128071;</h2>
            Enter Author Name: <input type='text' name='authorname' value={authorname} onChange={changeHandler}/><br/><br/>
            Enter Art Name: <input type='text' name='artname' value={artname} onChange={changeHandler}/><br/><br />
            Upload Photo: <input type="file" name="file" onChange={handleFileChange} />
            <button>Submit</button>
        </form>
      </center>
      <Link to='/' className="nav-link">Back to Home</Link>
    </div>
  )
}

export default Uploadform;
