import React from 'react';

const LeftIcon : React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (<svg  {...props} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M13.5 16.5l-4-4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)
};

export default LeftIcon;
