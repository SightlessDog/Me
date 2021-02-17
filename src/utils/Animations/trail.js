import React from 'react';
import { useTrail, a, animated } from 'react-spring';
import styled from 'styled-components';
import { black } from '../colors';
import { bodyFont, typeScale } from '../typography';

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 20 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  });

  const Div = styled.div`
    position: absolute;
    left: 51%;
    top: 49%;
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
}

export default Trail;
