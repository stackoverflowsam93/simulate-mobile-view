import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Content from '../components/Content';

export default () => {

    const [showModal, setShowModal] = useState(false);
    
    const Modal = () => (
        <div style={{width: 500, backgroundColor: "rgba(0,0,0,0.4)", top: "50%"}} className="position-fixed m-auto">
            <Content />
        </div>
    );

    return (
        <div className="App d-flex flex-column align-items-center">
            <Link className="m-5" to="/other">Go to other</Link>
            <button className="col-3 m-5" onClick={() => setShowModal(!showModal)}>Show the modal</button>
            {showModal && <Modal />}
        </div>    
    );
};
