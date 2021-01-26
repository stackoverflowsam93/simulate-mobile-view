import React from 'react';
import SymmetricalDiv from './SymmetricalDiv';
import svgLogo from '../images/SVG_logo.svg';

const Image = () => (
    <SymmetricalDiv className='rounded-circle d-flex flex-column m-2 align-items-center bg-danger'>
        <strong >A title</strong>
        <span>A description</span>
        <img className='my-3' src={svgLogo} />
        <a href="#">A Link</a>
    </SymmetricalDiv>
);

export default Image;