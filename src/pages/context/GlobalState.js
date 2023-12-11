import React, { createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movieList: localStorage.getItem('movieList') ? JSON.parse(localStorage.getItem('movieList')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('movieList', JSON.stringify(state.movieList));
  }, [state]);

  const addMovieToFavs = movie => {
    dispatch({type: "ADD_MOVIE_TO_MOVIELIST", payload: movie});
  };

  return (
    <GlobalContext.Provider 
     value={{
      movielist: state.movieList,
      addMovieToFavs
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
};
