import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Favourite = () => {
  const { movieList } = useContext(GlobalContext);

  return (
    <div>
      <h1>Favoruites</h1>
      <div>
        {movieList && movieList.map((movie) => {
          <h1>{movie.original_title}</h1>
        })}
      </div>
    </div>
  )
}

export default Favourite;