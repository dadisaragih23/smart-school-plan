import React, { useState } from 'react';
import { Paper, Typography, Button, Box, Chip, Divider, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SensorInfo = ({ sensor, onClose }) => {
  const [showHistory, setShowHistory] = useState(false);

  // Проверка на существование sensor
  if (!sensor || typeof sensor !== 'object') {
    return null;
  }

  // Отображение названия типа датчика на русском
  const getSensorTypeName = (type) => {
    if (!type) return 'Неизвестный';
    
    switch (type) {
      case 'temperature':
        return 'Температура';
      case 'humidity':
        return 'Влажность';
      case 'fire':
        return 'Пожарный';
      case 'movement':
        return 'Движение';
      case 'security':
        return 'Камера';
      case 'server':
        return 'Сервер';
      case 'water':
        return 'Протечка';
      case 'gas':
        return 'Газ';
      case 'power':
        return 'Электроэнергия';
      default:
        return 'Датчик';
    }
  };

  // Отображение статуса на русском
  const getStatusName = (status) => {
    if (!status) return 'Неизвестно';
    
    switch (status) {
      case 'normal':
        return 'Нормальный';
      case 'warning':
        return 'Предупреждение';
      case 'alarm':
        return 'Тревога';
      case 'high':
        return 'Повышенный';
      default:
        return 'Неизвестно';
    }
  };

  // Цвет для статуса
  const getStatusColor = (status) => {
    if (!status) return '#AAAAAA';
    
    switch (status) {
      case 'normal':
        return '#44CC44';
      case 'warning':
        return '#FFAA00';
      case 'alarm':
        return '#FF0000';
      case 'high':
        return '#9900FF';
      default:
        return '#44CC44';
    }
  };

  // Иконка для типа датчика
  const getSensorIcon = (type) => {
    if (!type) return '❓';
    
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

  // Генерация истории данных (фиктивных, для демонстрации)
  const generateHistory = () => {
    if (!showHistory) return null;

    return (
      <Box sx={{ mt: 2, pt: 2, borderTop: '1px dashed #ccc' }}>
        <Typography variant="subtitle2" gutterBottom>
          История показаний
        </Typography>
        <Box sx={{ 
          height: '100px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '4px',
          p: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}>
          {[0.7, 0.5, 0.8, 0.9, 0.8, 0.75, 0.9, 0.95, 0.85, 0.8].map((h, i) => (
            <Box
              key={i}
              sx={{
                height: `${h * 80}px`,
                width: '6px',
                backgroundColor: getGraphColor(h),
                borderRadius: '2px'
              }}
            />
          ))}
        </Box>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
          Последние 10 часов
        </Typography>
      </Box>
    );
  };

  // Получение цвета для графика
  const getGraphColor = (value) => {
    if (value > 0.9) return '#FF0000';
    if (value > 0.7) return '#FFAA00';
    return '#44CC44';
  };

  // Получение дополнительной информации в зависимости от типа датчика
  const getTypeSpecificInfo = () => {
    if (!sensor || !sensor.type) return null;
    
    switch (sensor.type) {
      case 'temperature':
        return (
          <Typography variant="body2">
            <strong>Норма:</strong> 18-24°C
          </Typography>
        );
      case 'humidity':
        return (
          <Typography variant="body2">
            <strong>Норма:</strong> 40-60%
          </Typography>
        );
      case 'security':
        return (
          <Typography variant="body2">
            <strong>Угол обзора:</strong> {sensor.angle || 0}°
          </Typography>
        );
      default:
        return null;
    }
  };

  // Безопасное получение значений
  const sensorName = sensor.name || 'Без имени';
  const sensorType = sensor.type || 'unknown';
  const sensorStatus = sensor.status || 'unknown';
  const sensorValue = sensor.value || 'Н/Д';
  const sensorId = sensor.id || '?';
  const sensorX = sensor.x || 0;
  const sensorY = sensor.y || 0;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        position: 'absolute', 
        bottom: '20px', 
        right: '20px', 
        padding: '16px',
        width: '350px',
        backgroundColor: '#fff',
        borderTop: `4px solid ${getStatusColor(sensorStatus)}`
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            {getSensorIcon(sensorType)} {sensorName}
          </Typography>
          <Chip 
            label={getStatusName(sensorStatus)} 
            size="small" 
            sx={{ 
              backgroundColor: getStatusColor(sensorStatus), 
              color: 'white',
              fontWeight: 'bold'
            }} 
          />
        </Box>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          <strong>Тип датчика:</strong> {getSensorTypeName(sensorType)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Значение:</strong> {sensorValue}
        </Typography>
        {getTypeSpecificInfo()}
        <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem', color: '#666' }}>
          <strong>ID:</strong> {sensorId}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#666' }}>
          <strong>Координаты:</strong> x:{sensorX}, y:{sensorY}
        </Typography>
      </Box>
      
      {generateHistory()}
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button 
          variant="outlined" 
          size="small"
          startIcon={<HistoryIcon />}
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? 'Скрыть историю' : 'История'}
        </Button>
        
        <Box>
          <IconButton size="small" color="primary" sx={{ mr: 1 }}>
            <SettingsIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="primary">
            <NotificationsIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SensorInfo; 