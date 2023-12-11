import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';
import React, { useState } from 'react';
import { GlobalProvider } from './pages/context/GlobalState';
import Favourite from './pages/favourite/Favourite';

function App(props) {

  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="movie/:id" element={<Movie />}></Route>
              <Route path="movies/:type" element={<MovieList />}></Route>
              <Route path="movies/favourites" element={<Favourite />}></Route>
              <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
