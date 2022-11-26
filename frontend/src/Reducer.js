//상품,user 정보 reducer

export const initialState = {
    product: [],
};



const reducer = (state, action) => {

    switch (action.type) {
        case 'ERRAND_PRODUCT':
            return {
                ...state,
                product: [...state.product, action.item],
            };
        default:
            return state;
    }
};

export default reducer;