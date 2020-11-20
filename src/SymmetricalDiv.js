import React, {useState, useEffect, useRef} from 'react';
    
const SymmetricalDiv = ({style, children, ...props}) => {
    const [diamStyle, setDiamStyle] = useState({});
    const elementRef = useRef(null);
    style = style ? Object.assign({}, diamStyle, style) : diamStyle ;

    useEffect(() => {
        const width = elementRef.current.clientWidth;
        const height = elementRef.current.clientHeight;
        const diam = Math.max(width, height);   
        setDiamStyle({width: diam, height: diam});
    }, []);

    return (
        <div ref={elementRef} {...props} style={style}>
            {children}
        </div>
    );
};

export default SymmetricalDiv