import { ADDFOOD, DELETEFOOD, EDITFOOD, ADDONE, MINUSONE } from './../actions/actionTypes';

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
    ],
    count: [1, 1, 1],
};


var oderFood = (state = initialState, action) => {
    switch (action.type) {
        case ADDFOOD: {
            return {
                myOder: [...state.myOder, action.food],
                count: [...state.count, 1],
            };
        }
        case DELETEFOOD: {
            let index = state.myOder.findIndex(p => p.id !== action.id)
            let arr = state.count.splice(index);
            return {
                myOder: state.myOder.filter(p => p.id !== action.id),
                count: arr
            };
        }
        case EDITFOOD: {
            return state;
        }
        case ADDONE: {
            let i = action.index;
            let a = state.count[i] + 1;
            state.count[i] = a;
            let arr = state.count;
            return {
                myOder: [...state.myOder],
                count: arr,
            };
        }
        case MINUSONE: {
            let i = action.index;
            let a = 1;
            if (state.count[i] > 2) {
                a = state.count[i] - 1;
            }
            state.count[i] = a;
            let arr = state.count;
            return {
                myOder: [...state.myOder],
                count: arr
            };
        }
        default:
            return state;
    }
};

export default oderFood;
