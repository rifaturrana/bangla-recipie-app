import {
  CHANGE_AVATAR,
  CHANGE_PASSWORD,
  EDIT_USER,
  GET_AVATAR,
  GET_ERRORS,
  GET_SAVED_RECIPES,
  GET_USER_RECIPES,
  RECIPE_LOADING,
  USER_LOADED,
  USER_LOADING,
} from "./types";
import axiosInstance from "../../utils/axios";
import { avatarTokenConfig, tokenConfig } from "./auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .get("/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const editUser = (username, email) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ username, email });

  axiosInstance
    .put("/user/", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
      toast.success('Profile updated successfully');
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const changePassword =
  (old_password, new_password) => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const body = JSON.stringify({ old_password, new_password });

    axiosInstance
      .put("/user/password/change/", body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CHANGE_PASSWORD,
          payload: res.data,
        });
        toast.success('Password changed successfully');
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
        if (err.response.data.old_password) {
          toast.error(err.response.data.old_password[0]);
        }
        else {
          toast.error(err.response.data.new_password[0] + ' ' + err.response.data?.new_password[1]);
        }
      });
  };

export const getSavedRecipes = (user_id) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .get(`/user/profile/${user_id}/bookmarks/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SAVED_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getUserRecipes = (username) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .get(`/recipe/?author__username=${username}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getAvatar = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .get("/user/profile/avatar/", tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_AVATAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const changeAvatar = (avatar) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .put("/user/profile/avatar/", avatar, avatarTokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_AVATAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
