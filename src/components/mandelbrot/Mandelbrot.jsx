import React from "react";
import './Mandelbrot.css';
import Plot from 'react-plotly.js';
import { GPU } from 'gpu.js';
import { connect } from "react-redux";

const Mandelbrot = () => {
    return (
        <div className="mandelbrot">
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                ]}
                layout={{autosize: true}}
                useResizeHandler
                style={{width: "100%", height: "100%"}}
            />
        </div>
    );
};

const mapStateToProps = state => {

}

export default connect(null)(Mandelbrot);
