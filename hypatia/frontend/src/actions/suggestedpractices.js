import axios from "axios";

import { GET_SUGGESTEDPRACTICES, DELETE_SUGGESTEDPRACTICES } from "./types";

var path = window.location.pathname.split('/')[2]

//GET SUGGESTED_PRACTICES
export const getSuggestedPractices = () => (dispatch) => {
  axios
    .get(`/suggestedpracticeapi/suggestedpractice?topic_most_missed=${path}`)
    .then((res) => {
      dispatch({
        type: GET_SUGGESTEDPRACTICES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE COMPLETED SUGGESTED PRACTICE QUESTIONS
export const deleteSuggestedPractices = (id) => (dispatch) => {
  axios
    .delete(`/suggestedpracticeapi/suggestedpractice/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_SUGGESTEDPRACTICES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
