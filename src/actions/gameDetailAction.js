//import api
import {GameDetailsURL, GameScreenShotURL} from '../api';
//import axios
import axios from 'axios';


export const loadDetails = (id) => async (dispatch) => {
    //dispatch is loading
    dispatch({
        type: "LOADING_GAMES",
    })
    const detailsData = await axios.get(GameDetailsURL(id));
    const screenshotData = await axios.get(GameScreenShotURL(id));

    dispatch({
        type: 'GAME_DETAILS',
        payload: {
            gameDetail: detailsData.data,
            screen: screenshotData.data,
        },
    });
};
