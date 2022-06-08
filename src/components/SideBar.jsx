import React, {useState} from "react";
import './SideBar.css';
import { connect } from "react-redux";
import { recalculateMandelbrotAction, updateIterations } from "./actions";

const SideBar = ({x_start, x_end, y_start, y_end, iterations, recalculateMandelbrotAction, updateIterations}) => {
    const [iters, setIters] = useState(iterations);

    const handleIterationSubmit = event => {
        event.preventDefault();
        recalculateMandelbrotAction(x_start, x_end, y_start, y_end, iters)
    }

    return (
        <div className="sidebar">
            <div className="outer_wrapper">
                <h1>Mandelbrot Calculator</h1>
                <div className="content_wrapper">
                    <h3>X-Start</h3>
                    <input readOnly value={x_start} />
                </div>
                <div className="content_wrapper">
                    <h3>X-End</h3>
                    <input readOnly value={x_end} />
                </div>
                <div className="content_wrapper">
                    <h3>Y-Start</h3>
                    <input readOnly value={y_start} />
                </div>
                <div className="content_wrapper">
                    <h3>Y-End</h3>
                    <input readOnly value={y_end} />
                </div>
                <div className="content_wrapper">
                    <h3>Iterations</h3>
                    <form onSubmit={handleIterationSubmit}>
                        <input onChange={event => setIters(event.target.value)} value={iters} />
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        x_start: state.mandelbrotData.x_start,
        x_end: state.mandelbrotData.x_end,
        y_start: state.mandelbrotData.y_start,
        y_end: state.mandelbrotData.y_end,
        iterations: state.mandelbrotData.iterations
    };
};

export default connect(mapStateToProps, {recalculateMandelbrotAction, updateIterations})(SideBar);
