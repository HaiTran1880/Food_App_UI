import { OPENMODAL } from './../actions/actionTypes';

var initialState = {
    isOpen: 1,
};

var openModal = (state = initialState, action) => {
    switch (action.type) {
        case OPENMODAL: {
            return { isOpen: action.open };
        }
        default:
            return state;
    }
};

export default openModal;
