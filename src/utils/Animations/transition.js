import React from 'react';
import { useTrail } from 'react-spring';

const Transition = ({ children, ...props }) => {
  const items = React.Children.toArray(children);

  const transition = useTrail(items.length, {
    config: { mass: 100, tension: 1000, friction: 200 },
    y: 40,
    opacity: 1,
    from: { opacity: 0.5, y: 0 },
  });

  return (
    <div {...props}>
      {transition.map(({ y, ...rest }, index) => (
        <div
          key={items[index]}
          style={{
            ...rest,
            transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          <div>{items[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default Transition;
