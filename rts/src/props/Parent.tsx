import React from 'react';
import App from '../index';
import {ChildAsFC} from './Child'
const Parent = () => {
    return <ChildAsFC color='blue' onClick={() => console.log('Click')}>
        asdad
    </ChildAsFC>
};

export default Parent;