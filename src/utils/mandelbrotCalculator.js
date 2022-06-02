import { GPU } from "gpu.js";

const gpu = new GPU();

const recalculateMandelbrot = gpu.createKernel(function(x_start, x_end, y_start, y_end, iters){
    let c_re = x_start + (x_end - x_start) * this.thread.x / 1024;
    let c_im = y_start + (y_end - y_start) * this.thread.y / 1024;
    let z_re = 0, z_im = 0;
    let z_re_prev = 0;

    for(let i = 0; i < iters; i++) {
        z_re_prev = z_re;
        z_re = z_re * z_re - z_im * z_im + c_re;
        z_im = z_re_prev * z_im + z_re_prev * z_im + c_im;

        if ((z_re * z_re + z_im * z_im) >= 4) {
            return i;
        }
    }
    return iters;
}).setOutput([1024, 1024]);

export default recalculateMandelbrot;
