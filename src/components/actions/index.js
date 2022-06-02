import recalculateMandelbrot from "../../utils/mandelbrotCalculator";

export const recalculateMandelbrotAction = (x_start, x_end, y_start, y_end, iterations) => {
    return {
        type: 'MANDELBROT_RECALCULATION',
        payload: recalculateMandelbrot(x_start, x_end, y_start, y_end, iterations)
    };
};
