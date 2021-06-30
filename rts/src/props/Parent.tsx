import React from 'react';
import {Child} from './Child'
const Parent = () => {
    return <Child color='blue' onClick={() => console.log('Click')}/>
};

export default Parent;