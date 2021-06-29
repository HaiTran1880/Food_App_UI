import { ADDFOOD, DELETEFOOD, EDITFOOD } from './actionTypes';

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
};