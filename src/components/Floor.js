import React from 'react';
import { Group, Line, Rect, Text, Circle } from 'react-konva';
import Room from './Room';
import Sensor from './Sensor';
import Wall from './Wall';
import Door from './Door';
import Stair from './Stair';

const Floor = ({ floor, onSensorSelect, viewMode = "normal" }) => {
  // Если floor не определен, возвращаем пустую группу
  if (!floor) {
    return <Group />;
  }

  // Функция для определения цвета комнаты в зависимости от типа
  const getRoomColor = (type) => {
    switch (type) {
      case 'classroom': return '#E0F7FA'; // Светло-голубой для учебных классов
      case 'hall': return '#F5F5F5'; // Светло-серый для холлов
      case 'lab': return '#E0F2F1'; // Светло-голубовато-зеленый для лабораторий
      case 'library': return '#E8F5E9'; // Светло-зеленый для библиотеки
      case 'cafeteria': return '#FFF8E1'; // Светло-желтый для столовой
      case 'gym': return '#F3E5F5'; // Светло-фиолетовый для спортзала
      case 'admin': return '#FFEBEE'; // Светло-красный для админ. помещений
      case 'teachers': return '#FFF3E0'; // Светло-оранжевый для учительской
      case 'wc': return '#E0E0E0'; // Серый для туалетов
      case 'medical': return '#F9FBE7'; // Светло-лаймовый для медпункта
      case 'security': return '#ECEFF1'; // Светло-синевато-серый для охраны
      case 'stairs': return '#CFD8DC'; // Серо-голубой для лестниц
      case 'storage': return '#EEEEEE'; // Серый для хранилищ
      case 'computer': return '#E3F2FD'; // Светло-синий для компьютерных классов
      case 'server': return '#E8EAF6'; // Светло-индиго для серверной
      case 'technical': return '#FAFAFA'; // Почти белый для тех. помещений
      case 'assembly': return '#FCE4EC'; // Светло-розовый для актового зала
      default: return '#FFFFFF'; // Белый по умолчанию
    }
  };

  // Проверяем наличие необходимых данных
  const rooms = floor.rooms || [];
  const walls = floor.walls || [];
  const doors = floor.doors || [];
  const stairs = floor.stairs || [];
  const sensors = floor.sensors || [];

  return (
    <Group>
      {/* Отображаем комнаты */}
      {rooms.map(room => (
        <Room
          key={room.id || `room-${Math.random()}`}
          room={room}
          color={getRoomColor(room.type)}
        />
      ))}

      {/* Отображаем стены */}
      {walls.map(wall => (
        <Wall
          key={wall.id || `wall-${Math.random()}`}
          wall={wall}
        />
      ))}

      {/* Отображаем двери */}
      {doors.map(door => (
        <Door
          key={door.id || `door-${Math.random()}`}
          door={door}
        />
      ))}

      {/* Отображаем лестницы */}
      {stairs.map(stair => (
        <Stair
          key={stair.id || `stair-${Math.random()}`}
          stair={stair}
        />
      ))}

      {/* Отображаем датчики */}
      {sensors.map(sensor => (
        <Sensor
          key={sensor.id || `sensor-${Math.random()}`}
          sensor={sensor}
          onClick={() => onSensorSelect && onSensorSelect(sensor)}
          viewMode="normal"
        />
      ))}
    </Group>
  );
};

export default Floor; 