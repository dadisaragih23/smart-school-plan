import React from 'react';
import { Rect, Arc, Group } from 'react-konva';

const Door = ({ door }) => {
  // Определяем цвет в зависимости от типа двери
  const getDoorColor = (type) => {
    switch (type) {
      case 'entrance': return '#4CAF50'; // Зеленый для входных дверей
      case 'emergency': return '#F44336'; // Красный для аварийных выходов
      case 'room': return '#FFFFFF'; // Белый для обычных дверей
      default: return '#FFFFFF';
    }
  };
  
  const color = getDoorColor(door.type);
  
  // Для дверей, которые открываются (имеют дугу)
  if (door.angle !== undefined) {
    const rotation = door.angle || 0;
    
    return (
      <Group>
        {/* Основание двери */}
        <Rect
          x={door.x}
          y={door.y}
          width={door.width}
          height={door.height}
          fill={color}
          stroke="#333333"
          strokeWidth={1}
          rotation={rotation}
          offsetX={0}
          offsetY={door.height / 2}
        />
        
        {/* Дуга открытия двери */}
        <Arc
          x={door.x}
          y={door.y}
          innerRadius={0}
          outerRadius={door.width}
          angle={90}
          rotation={rotation}
          fill="transparent"
          stroke="#999999"
          strokeWidth={1}
          dash={[2, 2]}
        />
      </Group>
    );
  }
  
  // Для обычных дверей без дуги
  return (
    <Rect
      x={door.x}
      y={door.y}
      width={door.width}
      height={door.height}
      fill={color}
      stroke="#333333"
      strokeWidth={1}
    />
  );
};

export default Door; 