import React from 'react';


const RightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (<svg  {...props} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10.5 7.5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);
};

export default RightIcon;
