import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Group, Text, Rect } from 'react-konva';
import { Box, ButtonGroup, Button } from '@mui/material';
import Floor from './Floor';
import SensorInfo from './SensorInfo';
import schoolData from '../data/schoolData';

const SchoolMap = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [stageSize, setStageSize] = useState({ width: 900, height: 700 });
  const [viewMode, setViewMode] = useState("normal"); // только normal режим
  const stageRef = useRef(null);
  const containerRef = useRef(null);

  // Находим выбранный этаж
  const floor = schoolData?.floors?.find(f => f.id === currentFloor) || null;

  // Обработчик изменения этажа
  const handleFloorChange = (floorId) => {
    setCurrentFloor(floorId);
    setSelectedSensor(null);
  };

  // Обработчик выбора датчика
  const handleSensorSelect = (sensor) => {
    if (sensor) {
      setSelectedSensor(sensor);
    }
  };

  // Закрытие информации о датчике
  const handleSensorInfoClose = () => {
    setSelectedSensor(null);
  };

  // Обновление размера при изменении размеров окна
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const newWidth = Math.min(900, containerRef.current.offsetWidth - 20);
        setStageSize({
          width: newWidth,
          height: 700
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="school-map-container" ref={containerRef}>
      <div className="floor-selector">
        {schoolData?.floors?.map(floor => (
          <Button
            key={floor.id}
            variant={floor.id === currentFloor ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleFloorChange(floor.id)}
            sx={{ margin: '0 5px' }}
          >
            {floor.name}
          </Button>
        ))}
      </div>

      <div className="map-container">
        <Stage 
          width={stageSize.width} 
          height={stageSize.height}
          ref={stageRef}
        >
          <Layer>
            {/* Масштабная линейка */}
            <Group x={20} y={stageSize.height - 30}>
              <Rect
                width={100}
                height={5}
                fill="black"
              />
              <Text
                text={`10 метров`}
                fontSize={12}
                y={-15}
                fill="black"
              />
            </Group>

            {floor && (
              <Floor
                floor={floor}
                onSensorSelect={handleSensorSelect}
                viewMode={viewMode}
              />
            )}
          </Layer>
        </Stage>
      </div>

      {selectedSensor && (
        <SensorInfo 
          sensor={selectedSensor} 
          onClose={handleSensorInfoClose}
        />
      )}
    </div>
  );
};

export default SchoolMap; 