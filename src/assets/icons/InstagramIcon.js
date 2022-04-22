import React from 'react';

const InstagramIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 30"
      width={props.width || '16px'}
      height={props.height || '16px'}
      fill={props.fillColor}
    >
      <path d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
      <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
      <circle cx="18.5" cy="5.5" r="1.5" />
    </svg>
  );
};

export { InstagramIcon };
