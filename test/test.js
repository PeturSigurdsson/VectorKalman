import KalmanFilter from 'kalmanjs';
import assert from 'assert';
import  VectorKalman from '../index.js';

const VK = VectorKalman;
const K = KalmanFilter;

let v = {w: 4,x: 2, y: 3, z: 1};
// Clone object
let cl = {...v};

// Single variable Kalman filters
const kw = new K(); kw.filter(v.w);
const kx = new K(); kx.filter(v.x);
const ky = new K(); ky.filter(v.y);
const kz = new K(); kz.filter(v.z);
// Vector filter
const vk = new VK(v);

const test = () => {
  for(let i = 0; i < 5; i++){
    // Change values in vector
    v.w += i, v.x += i, v.y += i, v.z += i;
    // Filter values at each step
    v = vk.filter(v);

    // Chamge values in clone
    cl.w += i, cl.x += i, cl.y += i, cl.z += i;
    // Filter single variables separately
    cl.w = kw.filter(cl.w);
    cl.x = kx.filter(cl.x);
    cl.y = ky.filter(cl.y); 
    cl.z = kz.filter(cl.z);
  }

  return assert(
    v.w === cl.w && 
    v.x === cl.x && 
    v.y === cl.y &&
    v.z === cl.z, 
    "Failed"
  );
}

export default test();
