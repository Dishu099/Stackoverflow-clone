import { combineReducers } from "redux";
import authReducer from "./auth.js";
import currentUserReducer from './currentUser.js'
import questionsReducer from './questions.js'
import usersReducer from './users.js'
import postReducer from "./post.js"
import sideBar from "./sideBar.js"
import chatbot from "./chatbot.js"

export default combineReducers({
  authReducer, currentUserReducer, questionsReducer, usersReducer, postReducer, sideBar, chatbot
})