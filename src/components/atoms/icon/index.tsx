import React from 'react';

type props = {
    classNames: string;
    style: object;
    image: string;
    alt: string;
}

const Icon = ({classNames, style, image, alt }: props) => {
    return (
        <img className={classNames} style={style} src={image} alt={alt}/>
    );
}

export default Icon;
