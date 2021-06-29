import { OPENMODAL } from './actionTypes';

export const openModal = () => {
    return {
        type: OPENMODAL,
        open: true,
    };
};