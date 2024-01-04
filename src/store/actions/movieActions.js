export const ADD_FAVLIST = "ADD_FAVLIST";
export const REMOVE_FAVLIST = "REMOVE_FAVLIST"
export const ONCEKI = "ONCEKI";
export const SONRAKI = "SONRAKI";
export const BASA_DON = "BASA_DON";

export const addFavlist = (movies) => {
    return {
        type: ADD_FAVLIST,
        payload: movies,
    };
};

export const removeFavlist = (movieId) => {
    return {
        type: REMOVE_FAVLIST,
        movieId,
    }
}

export const onceki = () => {
    return {
        type: ONCEKI,
    }
}

export const sonraki = () => {
    return {
        type: SONRAKI,
    }
}

export const basadon = () => {
    return {
        type: BASA_DON,
    }
}