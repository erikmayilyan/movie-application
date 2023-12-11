export default (state, action) => {
  switch(action.type) {
    case "ADD_MOVIE_TO_MOVIELIST":
      return {
        ...state,
        movieList: [action.payload, ...state.movieList],
      }
    default: 
      return state;
  }
};