import React from 'react';
import { Group, Circle, Text, Line, Arc, Wedge } from 'react-konva';

const Sensor = ({ sensor, onClick, viewMode = "normal" }) => {
  // Если sensor не определен, возвращаем пустую группу
  if (!sensor || !sensor.type) {
    return <Group />;
  }

  // Определяем цвет в зависимости от статуса датчика
  const getStatusColor = (status) => {
    switch (status) {
      case 'normal':
        return '#44CC44'; // Зеленый для нормального состояния
      case 'warning':
        return '#FFAA00'; // Оранжевый для предупреждения
      case 'alarm':
        return '#FF0000'; // Красный для тревоги
      case 'high':
        return '#9900FF'; // Фиолетовый для высоких показателей
      default:
        return '#44CC44';
    }
  };

  // Определяем иконку в зависимости от типа датчика
  const getSensorIcon = (type) => {
    switch (type) {
      case 'temperature':
        return '🌡️';
      case 'humidity':
        return '💧';
      case 'fire':
        return '🔥';
      case 'movement':
        return '👤';
      case 'security':
        return '📷';
      case 'server':
        return '💻';
      case 'water':
        return '🚿';
      case 'gas':
        return '⚗️';
      case 'power':
        return '⚡';
      default:
        return '📊';
    }
  };

  // Размер и отображение датчика в зависимости от режима
  const sensorRadius = viewMode === "sensors" ? 12 : 10;
  const showLabel = viewMode !== "heatmap";
  const showIcon = viewMode !== "heatmap";
  
  // Цвет и прозрачность в зависимости от режима просмотра
  const statusColor = getStatusColor(sensor.status || 'normal');
  const fillOpacity = viewMode === "sensors" ? 1 : 0.8;
  
  // Особая отрисовка для камер безопасности
  if (sensor.type === 'security') {
    const cameraAngle = sensor.angle || 0;
    const coneLength = 30 / (viewMode === "sensors" ? 0.8 : 1);

    return (
      <Group onClick={onClick ? () => onClick(sensor) : undefined}>
        {/* Круг камеры */}
        <Circle
          x={sensor.x}
          y={sensor.y}
          radius={8}
          fill={statusColor}
          opacity={fillOpacity}
          stroke="#333333"
          strokeWidth={1}
        />
        
        {/* Конус обзора */}
        <Wedge
          x={sensor.x}
          y={sensor.y}
          radius={coneLength}
          angle={60}
          rotation={cameraAngle}
          fill={statusColor}
          opacity={0.2}
          stroke={statusColor}
          strokeWidth={1}
        />
        
        {/* Название камеры */}
        {showLabel && (
          <Text
            x={sensor.x - 15}
            y={sensor.y + 10}
            text={sensor.name}
            fontSize={8}
            fontFamily="Arial"
            fill="#333333"
            align="center"
            width={30}
          />
        )}
      </Group>
    );
  }

  // Эффект пульсации для датчиков с тревогой
  const isAlarming = sensor.status === 'alarm';
  const pulseClass = isAlarming ? 'sensor-alarm' : '';

  return (
    <Group 
      onClick={onClick ? () => onClick(sensor) : undefined}
      className={pulseClass}
    >
      <Circle
        x={sensor.x}
        y={sensor.y}
        radius={sensorRadius}
        fill={statusColor}
        opacity={fillOpacity}
        stroke="#333333"
        strokeWidth={1}
      />
      
      {showIcon && (
        <Text
          x={sensor.x - 5}
          y={sensor.y - 5}
          text={getSensorIcon(sensor.type)}
          fontSize={10}
          align="center"
          verticalAlign="middle"
        />
      )}
      
      {showLabel && (
        <Text
          x={sensor.x - 15}
          y={sensor.y + 12}
          text={sensor.name}
          fontSize={8}
          fontFamily="Arial"
          fill="#333333"
          align="center"
          width={30}
        />
      )}
    </Group>
  );
};

export default Sensor; 