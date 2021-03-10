import React from 'react';
import Loading from './Loading';

const Header = ({ content }) => {

    let {title, image} = content;

    // conditional mini jsx
    const showImage = (
        <>
            <img src={image} alt="header_img" className="header_img" />
            <span className="hidden">{ title ? (document.title = title) : null  }</span>
        </>
    );

    // main component return

    return (
        <div className="header_area flx flx-center">
            {
                content && image ? (showImage) : (
                    content && title ? (
                        <h1 className="font-large">{title}</h1>
                    ) : (
                        <Loading />
                    )
                )
            }
        </div>
    );
};

export default Header;