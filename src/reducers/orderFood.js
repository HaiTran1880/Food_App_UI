import { ADDFOOD, DELETEFOOD, EDITFOOD } from './../actions/actionTypes';

const initialState = {
    myOder: [
        {
            id: '1',
            name: "Special Gajananad Bhel",
            decription: 'Mixed vegetables, Chicken Egg',
            cost: 17.20,
            bestsell: false,
        },
        {
            id: '2',
            name: "Cold Bournvita",
            decription: 'Extra Hot Milk',
            cost: 15.00,
            bestsell: true,
        },
        {
            id: '3',
            name: "Butter Jam Maska Bun",
            decription: 'SweetFire Chicken Breast',
            cost: 29.50,
            bestsell: false
        }
    ]
};


var oderFood = (state = initialState, action) => {
    switch (action.type) {
        case ADDFOOD: {
            return {
                myOder: [...state.myOder, action.food],
            };
        }
        case DELETEFOOD: {
            return { myOder: state.myOder.filter(p => p.id !== action.id) };
        }
        case EDITFOOD: {
            return state;
        }
        default:
            return state;
    }
};

export default oderFood;
