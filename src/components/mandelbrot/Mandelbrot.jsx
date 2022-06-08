import React, { useEffect } from "react";
import './Mandelbrot.css';
import Plot from 'react-plotly.js';
import { connect } from "react-redux";
import { recalculateMandelbrotAction } from "../actions";

const Mandelbrot = (props) => {
    useEffect(() => {
        props.recalculateMandelbrotAction(-2, 2, -2, 2, 100);
    }, []);

    const handleRelayout = (restyleData) => {
        if(!!restyleData['xaxis.range[0]']) {
            props.recalculateMandelbrotAction(
                restyleData['xaxis.range[0]'],
                restyleData['xaxis.range[1]'],
                restyleData['yaxis.range[0]'],
                restyleData['yaxis.range[1]'],
                props.iterations);
        }
    }

    let xTicks = [], yTicks = [];
    for(let i = 0; i<1024; i++) {
        xTicks[i] = props.x_start + (props.x_end - props.x_start)/1024 * i;
        yTicks[i] = props.y_start + (props.y_end - props.y_start)/1024 * i;
    }

    return (
        <div className="mandelbrot">
            <Plot
                data={[
                {
                    z: props.mandelbrotData,
                    x: xTicks,
                    y: yTicks,
                    colorscale: 'Portland',
                    type: 'heatmap'
                },
                ]}
                layout={{
                    autosize: true, 
                    xaxis: {
                        ticks: '',
                        showticklabels: false,
                        constrain: 'domain',
                    },
                    yaxis: {
                        ticks: '',
                        showticklabels: false,
                        scaleanchor: 'x'
                    },
                    paper_bgcolor: '#222'
                }}
                style={{width: "100%", height: "100%"}}
                onRelayout={handleRelayout}
                config={{scrollZoom: true}}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        mandelbrotData: state.mandelbrotData.image,
        x_start: state.mandelbrotData.x_start,
        x_end: state.mandelbrotData.x_end,
        y_start: state.mandelbrotData.y_start,
        y_end: state.mandelbrotData.y_end,
        iterations: state.mandelbrotData.iterations
    }
}

export default connect(mapStateToProps, {recalculateMandelbrotAction})(Mandelbrot);
