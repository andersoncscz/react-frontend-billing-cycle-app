const BASE_URL = 'http://localhost:80/api'
import axios from 'axios';

export const GET_SUMMARY = 'GET_SUMMARY';
export const getSummary = () => {
    return async dispatch => {
        const request = await axios.get(`${BASE_URL}/billingCycles/summary`);
        const { credit, debt } = request.data;
        dispatch({
            type: GET_SUMMARY,
            credit,
            debt
        })
    }
}