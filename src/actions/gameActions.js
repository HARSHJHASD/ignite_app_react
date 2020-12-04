import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchedURL} from '../api';

//Action creator

export const loadGames = () => async (dispatch) => {
    //dispatch Loading Games
    dispatch({
        type: "LOADING_GAMES",
    });

    //Fetch Axios
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchedURL(game_name));
    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searched: searchedData.data.results,
        },
    });
};
