const INITIAL_STATE = {
    image: [[1, 2, 3], [1, 2, 3]],
    x_start: -2,
    x_end: 2,
    y_start: -2,
    y_end: 2,
}

const mandelbrotRecalculationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MANDELBROT_RECALCULATION':
            console.log(state)
            return action.payload;
        default:
            return state;
    }
};

export default mandelbrotRecalculationReducer;
