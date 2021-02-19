import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Curs = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fefefe;
  border-radius: 100%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  opacity: ${(props) => (props.theme.showCursor ? 1 : 0)};
  transform: ${(props) =>
    props.theme.cursorClicked
      ? 'translate(-50%, -50%) scale(0.9)'
      : props.theme.cursorHovered
      ? 'translate(-50%, -50%) scale(2)'
      : 'translate(-50%, -50%)'};
  background-color: ${(props) =>
    props.theme.cursorClicked || props.theme.cursorHovered ? null : null};
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseEnter);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const handleHoverEvents = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => setHovered(true));
      el.addEventListener('mouseout', () => setHovered(false));
    });
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setShowCursor(true);
  };

  const onMouseLeave = () => {
    setShowCursor(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <ThemeProvider
      theme={{
        showCursor: showCursor,
        cursorClicked: clicked,
        cursorHovered: hovered,
      }}
    >
      <Curs style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
    </ThemeProvider>
  );
};

export default Cursor;
