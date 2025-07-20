import React from 'react';

const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-1.007 1.11-.95l.91.08c.53.05.97.49.97.97l.08.91c.05.53-.49.97-.97.97l-.91-.08a1.125 1.125 0 01-1.11-.95zM12.75 21a1.125 1.125 0 01-1.125-1.125v-3.375a1.125 1.125 0 011.125-1.125h.007a1.125 1.125 0 011.125 1.125v3.375c0 .621-.504 1.125-1.125 1.125h-.007zM12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z"
    />
  </svg>
);

export default SettingsIcon;