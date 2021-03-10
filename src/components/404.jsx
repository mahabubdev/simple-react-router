import React from 'react';
import Header from './Header';
import { FiArrowLeft } from "react-icons/fi";

const Notfound = () => {
    return (
        <>
            <Header content={{title: "Error 404!"}} />
            <div className="detail_error">
                <h1>Page not found!</h1>
                <button style={{border: 'none'}} className="btn-explr bg-indigo-x txt-white my-2" onClick={() => window.history.back()}><FiArrowLeft /> go back</button>
            </div>
        </>
    );
};

export default Notfound;