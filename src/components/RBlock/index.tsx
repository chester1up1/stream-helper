// import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
// import './style.scss';

// export const RBlock: FC = ({ children }) => {
//   const [pos, setPos] = useState({
//     x: 0,
//     y: 0,
//   });
//   const ref = useRef<HTMLInputElement>(null);

//   const mouseMoveEvent = (e: MouseEvent) => {
//     // console.log('x: ', e.offsetX, ' y: ', e.offsetY);
//     const newPosX = e.offsetX - pos.x;
//     setPos((prev) => ({ ...prev, x: newPosX }));
//   };

//   const handleMouseDown = () => {
//     // console.log('element: ', ref.current?.getBoundingClientRect());
//     window.onmousemove = mouseMoveEvent;
//   };

//   const handleMouseUp = () => {
//     window.onmousemove = null;
//   };

//   useEffect(() => {
//     // console.log('pos: ', pos);
//   }, [pos]);

//   useEffect(() => {
//     if (ref.current != null)
//       setPos({
//         x: ref.current.getBoundingClientRect().x,
//         y: ref.current.getBoundingClientRect().y,
//       });
//   }, []);

//   const logPos = () => {
//     // console.log('logPos: ', pos);
//   };

//   return (
//     <>
//       <div
//         className="r-block"
//         ref={ref}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//         onMouseOut={handleMouseUp}
//         style={{ left: pos.x }}
//       >
//         {children}
//       </div>
//       <button type="button" onClick={logPos}>
//         logPos
//       </button>
//     </>
//   );
// };

import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { PositionableContainer, Position } from 're-position';

export const RBlock: FC = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [position, setPosition] = useState({
    left: '37.5%',
    top: '37.5%',
    width: '25%',
    height: '25%',
    rotation: '30deg',
  });

  const handleUpdate = (position: Position) => {
    setPosition(position);
    console.log('pos: ', position);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('setIsDisabled(true)');

      setIsDisabled(true);
    }, 2000);
    setTimeout(() => {
      console.log('setIsDisabled(false)');
      setIsDisabled(false);
    }, 3000);
  }, []);

  return (
    <PositionableContainer
      className="container"
      movable
      resizable
      rotatable
      position={position}
      onUpdate={handleUpdate}
      disabled={isDisabled}
    >
      <span>re-position</span>
    </PositionableContainer>
  );
};
