import React from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import { black } from '../colors';
import { bodyFont, typeScale } from '../typography';

// eslint-disable-next-line react/prop-types
const MeTrail = ({ children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 1000, friction: 200, duration: 2500 },
    opacity: 1,
    x: 0,
    height: 40,
    from: { opacity: 0, x: 0, height: 0 },
  });

  const Div = styled.div`
    position: relative;
    // eslint-disable-next-line react/prop-types
    left: ${props.left};
    // eslint-disable-next-line react/prop-types
    top: ${props.top};
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const DivsContainer = styled(animated.div)`
    position: relative;
    width: 100%;
    color: ${black[100]};
    font-size: ${typeScale.paragraphText};
    font-weight: 800;
    letter-spacing: -1px;
    will-change: transform, opacity;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const Children = styled(animated.div)`
    font-family: ${bodyFont};
  `;
  return (
    <Div {...props}>
      <div>
        {/* eslint-disable-next-line no-unused-vars */}
        {trail.map(({ x, height, ...rest }, index) => (
          <DivsContainer
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <Children>{items[index]}</Children>
          </DivsContainer>
        ))}
      </div>
    </Div>
  );
};

export default MeTrail;
