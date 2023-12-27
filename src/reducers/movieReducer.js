import { movies } from "../movies";
import {ADD_FAVLIST,REMOVE_FAVLIST,ONCEKI,SONRAKI,BASA_DON} from '../actions/movieActions'

const initialState = {
    movies: movies,
    favList: [],
    sira: 0,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVLIST:
            return {
                ...state,
                favList: [...state.favList, action.payload],
            }

        case REMOVE_FAVLIST:
            return {
                ...state,
                favList: state.favList.filter(movie => movie.id !== action.movieId),
            };

            case ONCEKI:
                return {
                  ...state,
                  sira: state.sira - 1,
                };
              case SONRAKI:
                return {
                  ...state,
                  sira: state.sira + 1,
                };
              case BASA_DON:
                return {
                  ...state,
                  sira: initialState.sira,
                }

        default:
            return state;
    }


}

export default reducer;

        