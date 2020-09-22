import KalmanFilter from 'kalmanjs';

const K = KalmanFilter;

const isNumber = (n) => {
  return typeof n === 'number' && isFinite(n);
};

/**
 * Applies kalman filter to n dimensional 
 * vector object.
 **/
export default class VectorKalman {
  /**
   * Constructor takes vector object and
   * optional exclude propery name.
   * @param {Object} : v vector object
   * @param {string} : exclude  [optional]
   * @param {Number} : R        [optional]
   * @param {Number} : Q        [optional]
   * @param {Number} : A        [optional]
   * @param {Number} : B        [optional]
   * @param {Number} : C        [optional]
   * @return{Object}: VectorKalman object
   **/
  constructor(v, exclude = null, 
    R = 1, Q = 1, A = 1, B = 0, C = 1){
    if(v === undefined) 
      console.error("No vector!");
    this.model = {};
    for(let p in v){
      // Add all number properties to this
      if(isNumber(v[p]) && p !== exclude){ 
        this.model[p] = new KalmanFilter();
        v[p] = this.model[p].filter(v[p]);
      }
    }
  }

  /**
   * Filters numerical properties of vector
   * object v with kalman filter. 
   * As long as they are the same as those
   * of the vector object passed to constructor
   * @param {Object}: v vector object
   * @return {Object}: same vector object
   **/
  filter = (v) => {
    for(let p in this.model) {
      v[p] = this.model[p].filter(v[p]);
    }
    return v;
  };
}
