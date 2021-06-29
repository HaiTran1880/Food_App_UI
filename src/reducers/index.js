import openModal from "./openModal";
import oderFood from "./orderFood";
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    openModal,
    oderFood,
});

export default rootReducer;
