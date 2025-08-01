
import React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-1.01-.565-1.372l-2.09-2.09a1.5 1.5 0 0 0-2.122 0l-1.17 1.17a11.25 11.25 0 0 1-5.27-5.27l1.17-1.17a1.5 1.5 0 0 0 0-2.122l-2.09-2.09A1.5 1.5 0 0 0 6.75 3.75H5.25A2.25 2.25 0 0 0 3 6c0 .372.034.74.1 1.104" />
  </svg>
);

export default PhoneIcon;
