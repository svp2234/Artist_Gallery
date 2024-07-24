import React from 'react';
import Uploadform from './Uploadform';
import ArtList from './ArtList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Art Gallery</h1>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ArtList />} />
          <Route path="/uploadform" element={<Uploadform />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2024 Art Gallery. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;