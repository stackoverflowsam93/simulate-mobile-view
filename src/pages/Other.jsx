import React from 'react';
import {Link} from 'react-router-dom';
import Content from '../components/Content';

export default () => (
    <div className="d-flex flex-column align-items-center">
        <Link className="m-5" to="/">Go to main</Link>
        <Content />
    </div>
);