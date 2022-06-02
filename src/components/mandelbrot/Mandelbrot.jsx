import React, { useEffect } from "react";
import './Mandelbrot.css';
import Plot from 'react-plotly.js';
import { connect } from "react-redux";
import { recalculateMandelbrotAction } from "../actions";

const Mandelbrot = (props) => {
    console.log(props)

    useEffect(() => {
        props.recalculateMandelbrotAction(-2, 2, -2, 2, 300);
    }, []);

    const processRelayout = (restyleData) => {
        if(!!restyleData['xaxis.range[0]']) {
            console.log(restyleData);
            props.recalculateMandelbrotAction(-2, 2, -2, 2, 300);
        }
    }
    let xTicks = [];
    for(let i = 0; i<1024; i++) {
        xTicks[i] = -2 + 4/1024 * i;
    }

    return (
        <div className="mandelbrot">
            <Plot
                data={[
                {
                    z: props.mandelbrotData,
                    x: xTicks, // modify with state
                    y: xTicks,
                    colorscale: 'Viridis',
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
                }} //, plot_bgcolor:"black", paper_bgcolor:"#FFF3"}}
                useResizeHandler
                style={{width: "100%", height: "100%"}}
                //onRelayout={processRelayout}
                config={{scrollZoom: true}}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        mandelbrotData: state.mandelbrotData
    }
}

export default connect(mapStateToProps, {recalculateMandelbrotAction})(Mandelbrot);
