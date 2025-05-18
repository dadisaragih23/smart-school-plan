import React from 'react';
import { Group, Rect, Line, Text } from 'react-konva';

const Stair = ({ stair }) => {
  // Рисуем ступеньки лестницы
  const renderSteps = () => {
    const steps = [];
    const stepHeight = stair.height / stair.steps;
    
    // Определяем цвет и направление стрелки в зависимости от направления лестницы
    let arrowColor = '#000000';
    let arrowDirection = '';
    let arrowText = '';
    
    switch (stair.direction) {
      case 'up':
        arrowDirection = 'up';
        arrowColor = '#4CAF50'; // Зеленый для лестниц вверх
        arrowText = '▲';
        break;
      case 'down':
        arrowDirection = 'down';
        arrowColor = '#F44336'; // Красный для лестниц вниз
        arrowText = '▼';
        break;
      case 'both':
        arrowDirection = 'both';
        arrowColor = '#2196F3'; // Синий для лестниц в обе стороны
        arrowText = '↕';
        break;
      default:
        arrowDirection = 'up';
        arrowText = '▲';
    }
    
    // Рисуем ступеньки
    for (let i = 0; i < stair.steps; i++) {
      steps.push(
        <Line
          key={`step-${i}`}
          points={[
            stair.x, 
            stair.y + i * stepHeight, 
            stair.x + stair.width, 
            stair.y + i * stepHeight
          ]}
          stroke="#999999"
          strokeWidth={1}
        />
      );
    }
    
    // Добавляем символ направления
    steps.push(
      <Text
        key="direction"
        x={stair.x + stair.width / 2 - 10}
        y={stair.y + stair.height / 2 - 10}
        text={arrowText}
        fontSize={20}
        fill={arrowColor}
        width={20}
        height={20}
        align="center"
        verticalAlign="middle"
      />
    );
    
    return steps;
  };
  
  return (
    <Group>
      {/* Фон лестницы */}
      <Rect
        x={stair.x}
        y={stair.y}
        width={stair.width}
        height={stair.height}
        fill="#CFD8DC"
        stroke="#607D8B"
        strokeWidth={1}
      />
      {/* Ступеньки и символ направления */}
      {renderSteps()}
    </Group>
  );
};

export default Stair; 