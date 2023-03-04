import axios from "axios";
import {X_RAPID_API_KEY} from '@env';

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: {data},
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : "49.76790706769921",
                    tr_latitude: tr_lat ? tr_lat : "49.89747102886987",
                    bl_longitude: bl_lng ? bl_lng : "23.90628007496788",
                    tr_longitude: tr_lng ? tr_lng : "24.11819100711594",
                    limit: "30",
                    currency: "USD",
                    lunit: "km",
                    lang: "en_US",
                },
                headers: {
                    "X-RapidAPI-Key": X_RAPID_API_KEY,
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );

        return data;
    } catch (error) {
        return null;
    }
};