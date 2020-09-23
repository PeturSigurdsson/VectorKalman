# VectorKalman


A multivariable wrapper for [kalmanjs](https://www.npmjs.com/package/kalmanjs) by [@wouterbulten](https://www.npmjs.com/~wouterbulten).


## Installation

<p> 
VectorKalman is a light weight, pure js library that can be installed with node.
</p>

```
npm i vectorkalman
```

## Example

<p>
Use cases include sensor data, 3d positions
or rotations.
</p>

```javascript
import VectorKalman from 'VectorKalman';
// Use any object with numerical props
// Note that the object can contain other
// props. They will simply be ignored.
let v = {x: 10, y: 2, z: 0};
let vk = new VectorKalman(v);
v = {x: 11, y: 1, z: -4};
v = vk.filter(v);
```


## License
<p> 
MIT License

Copyright (c) 2020 Pétur Sigurðsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

</p>
