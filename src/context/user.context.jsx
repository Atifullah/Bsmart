import { createContext, useState,useEffect,useReducer } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../firebase/firebase.utils";
import { createAction } from "../reducer/reducer.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer =(state,action)=>{
  const {type,payload}=action;
  


  switch(type){
    
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
    ...state,
    currentUser: payload,
  };
    default: throw new Error (`unhandled error found it ${type} in userReducer`);
} 
};

export const UserProvider = ({ children }) => {

    /*const [currentUser, setCurrentUser] = useState(null);*/
 /* const value = { currentUser, setCurrentUser };*/

  const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE);

  const setCurrentUser=(user)=>{
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
  };

  const value = {
    currentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};