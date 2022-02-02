import React, { useEffect } from 'react';

const MicroFrontend = ({ appName, host }) => {

    const renderMicroFrontend = () => {    
        window[`render${appName}`](`${appName}-container`);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `${host}${"/static/js/bundle.js"}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
    }, [])

    return <main id={`${appName}-container`} />;
}

export default MicroFrontend
