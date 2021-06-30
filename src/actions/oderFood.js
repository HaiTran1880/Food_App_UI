import { ADDFOOD, DELETEFOOD, EDITFOOD, ADDONE, MINUSONE } from './actionTypes';

export const addFood = (food) => {
    return {
        type: ADDFOOD,
        food,
    };
};
export const deleteFood = (id) => {
    return {
        type: DELETEFOOD,
        id,
    };
};
export const editFood = (id) => {
    return {
        type: EDITFOOD,
        id,
    };
}
export const addOne = (index) => {
    return {
        type: ADDONE,
        index
    };
}
export const minusOne = (index) => {
    return {
        type: MINUSONE,
        index
    };
}
