import React from 'react';
import { Line } from 'react-konva';

const Wall = ({ wall }) => {
  return (
    <Line
      points={wall.points}
      stroke="#333333"
      strokeWidth={wall.thickness || 5}
      lineCap="square"
      lineJoin="miter"
    />
  );
};

export default Wall; 