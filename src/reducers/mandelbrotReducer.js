import recalculateMandelbrot from "../utils/mandelbrotCalculator";

const mandelbrotRecalculationReducer = (state = [[1, 2, 3], [1, 2, 3]], action) => {
    switch(action.type) {
        case 'MANDELBROT_RECALCULATION':
            return action.payload;
        default:
            return state;
    }
};

export default mandelbrotRecalculationReducer;
