import { configureStore } from "@reduxjs/toolkit";
import UIshowReducer from "./UIshow";
import credentialReduer from "./credential";
const store = configureStore({
  reducer: { credential: credentialReduer, UIshow: UIshowReducer },
});
export default store;