import React from 'react';
import { Group, Rect, Text } from 'react-konva';

const Room = ({ room, color }) => {
  // Функция для определения, является ли текст длинным
  const isLongText = (text) => {
    return text.length > 15;
  };

  return (
    <Group>
      <Rect
        x={room.x}
        y={room.y}
        width={room.width}
        height={room.height}
        fill={color || '#E5F0FF'}
        stroke="#6699CC"
        strokeWidth={1}
        cornerRadius={2}
      />
      <Text
        x={room.x + 5}
        y={room.y + (isLongText(room.name) ? 3 : 5)}
        text={room.name}
        fontSize={isLongText(room.name) ? 10 : 12}
        fontFamily="Arial"
        fill="#333333"
        width={room.width - 10}
        height={room.height - 10}
        align="center"
        verticalAlign="middle"
        wrap="word"
      />
      {room.id && (
        <Text
          x={room.x + 5}
          y={room.y + room.height - 15}
          text={`#${room.id}`}
          fontSize={8}
          fontFamily="Arial"
          fill="#666666"
        />
      )}
    </Group>
  );
};

export default Room; 