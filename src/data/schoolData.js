const schoolData = {
  name: "Умная Школа №1",
  floors: [
    {
      id: 1,
      name: "Первый этаж",
      rooms: [
        // Центральный коридор с улучшенной геометрией
        { id: 101, name: "Центральный коридор", x: 250, y: 200, width: 400, height: 100, type: "corridor" },
        
        // Главный вход
        { id: 102, name: "Главный вход", x: 400, y: 100, width: 100, height: 100, type: "entrance" },
        
        // Помещения с левой стороны коридора
        { id: 103, name: "Гардероб", x: 150, y: 150, width: 100, height: 150, type: "utility" },
        { id: 104, name: "Столовая", x: 50, y: 300, width: 200, height: 150, type: "cafeteria" },
        { id: 105, name: "Кухня", x: 50, y: 450, width: 100, height: 100, type: "kitchen" },
        { id: 106, name: "Кладовая продуктов", x: 150, y: 450, width: 100, height: 100, type: "storage" },
        
        // Помещения с правой стороны коридора
        { id: 107, name: "Пост охраны", x: 650, y: 150, width: 100, height: 150, type: "security" },
        { id: 108, name: "Актовый зал", x: 650, y: 300, width: 100, height: 150, type: "assembly" },
        { id: 109, name: "Спортивный зал", x: 650, y: 450, width: 100, height: 150, type: "gym" },
        
        // Лестницы
        { id: 110, name: "Лестница 1", x: 250, y: 300, width: 50, height: 50, type: "stairs" },
        { id: 111, name: "Лестница 2", x: 600, y: 300, width: 50, height: 50, type: "stairs" },
        
        // Туалеты
        { id: 112, name: "Туалет М", x: 300, y: 300, width: 50, height: 50, type: "wc" },
        { id: 113, name: "Туалет Ж", x: 350, y: 300, width: 50, height: 50, type: "wc" },
        
        // Административные помещения
        { id: 114, name: "Приемная", x: 450, y: 300, width: 50, height: 50, type: "admin" },
        { id: 115, name: "Кабинет директора", x: 500, y: 300, width: 50, height: 50, type: "admin" },
        { id: 116, name: "Медицинский кабинет", x: 400, y: 350, width: 50, height: 100, type: "medical" },
        { id: 117, name: "Бухгалтерия", x: 450, y: 350, width: 50, height: 100, type: "admin" },
        { id: 118, name: "Канцелярия", x: 500, y: 350, width: 50, height: 100, type: "admin" },
        { id: 119, name: "Раздевалка М", x: 550, y: 350, width: 50, height: 100, type: "locker" },
        
        // Добавляем названия для пустых комнат
        { id: 120, name: "Раздевалка Ж", x: 550, y: 450, width: 50, height: 100, type: "locker" },
        { id: 121, name: "Инвентарная", x: 550, y: 550, width: 100, height: 50, type: "storage" },
        { id: 122, name: "Комната отдыха", x: 250, y: 350, width: 150, height: 100, type: "rest" },
        { id: 123, name: "Лаборантская", x: 250, y: 450, width: 150, height: 150, type: "lab" },
        { id: 124, name: "Мастерская", x: 400, y: 450, width: 150, height: 150, type: "workshop" },
        { id: 125, name: "Гостевая комната", x: 50, y: 550, width: 200, height: 50, type: "guest" },
        { id: 126, name: "Вестибюль", x: 250, y: 100, width: 150, height: 100, type: "hall" },
        { id: 127, name: "Комната персонала", x: 550, y: 100, width: 100, height: 100, type: "staff" }
      ],
      // Стены вокруг всей школы и разделяющие помещения
      walls: [
        // Внешние стены
        { id: 1, points: [50, 100, 750, 100], thickness: 10 }, // Верхняя
        { id: 2, points: [50, 100, 50, 600], thickness: 10 }, // Левая
        { id: 3, points: [750, 100, 750, 600], thickness: 10 }, // Правая
        { id: 4, points: [50, 600, 750, 600], thickness: 10 }, // Нижняя
        
        // Центральный коридор
        { id: 5, points: [250, 200, 650, 200], thickness: 5 }, // Верхняя граница коридора
        { id: 6, points: [250, 300, 650, 300], thickness: 5 }, // Нижняя граница коридора
        
        // Горизонтальные стены между коридором и помещениями
        { id: 7, points: [50, 300, 750, 300], thickness: 5 },
        { id: 8, points: [50, 450, 750, 450], thickness: 5 },
        
        // Вертикальные стены
        { id: 9, points: [150, 100, 150, 600], thickness: 5 },
        { id: 10, points: [250, 100, 250, 600], thickness: 5 },
        { id: 11, points: [400, 300, 400, 350], thickness: 5 },
        { id: 12, points: [450, 300, 450, 450], thickness: 5 },
        { id: 13, points: [500, 300, 500, 450], thickness: 5 },
        { id: 14, points: [550, 300, 550, 450], thickness: 5 },
        { id: 15, points: [600, 100, 600, 600], thickness: 5 },
        { id: 16, points: [650, 100, 650, 600], thickness: 5 },
      ],
      // Двери
      doors: [
        // Главный вход
        { id: 1, x: 450, y: 100, width: 50, height: 5, type: "entrance" },
        
        // Двери в коридор с севера (верхняя часть)
        { id: 2, x: 200, y: 200, width: 30, height: 5, type: "room" }, // Гардероб
        { id: 3, x: 500, y: 200, width: 30, height: 5, type: "room" }, // Вход с севера в коридор
        { id: 4, x: 700, y: 200, width: 30, height: 5, type: "room" }, // Охрана
        
        // Двери в боковые помещения из коридора (нижняя часть)
        { id: 5, x: 275, y: 300, width: 30, height: 5, type: "room" }, // Лестница 1
        { id: 6, x: 325, y: 300, width: 30, height: 5, type: "room" }, // Туалет М
        { id: 7, x: 375, y: 300, width: 30, height: 5, type: "room" }, // Туалет Ж
        { id: 8, x: 475, y: 300, width: 30, height: 5, type: "room" }, // Приемная
        { id: 9, x: 525, y: 300, width: 30, height: 5, type: "room" }, // Директор
        { id: 10, x: 625, y: 300, width: 30, height: 5, type: "room" }, // Лестница 2
        
        // Двери в помещения слева и справа
        { id: 11, x: 150, y: 375, width: 5, height: 30, angle: 90, type: "room" }, // Столовая
        { id: 12, x: 100, y: 450, width: 30, height: 5, type: "room" }, // Кухня
        { id: 13, x: 200, y: 450, width: 30, height: 5, type: "room" }, // Склад
        { id: 14, x: 650, y: 375, width: 5, height: 30, angle: 90, type: "room" }, // Актовый зал
        { id: 15, x: 650, y: 525, width: 5, height: 30, angle: 90, type: "room" } // Спортзал
      ],
      // Лестницы
      stairs: [
        { id: 1, x: 250, y: 300, width: 50, height: 50, steps: 10, direction: "up" },
        { id: 2, x: 600, y: 300, width: 50, height: 50, steps: 10, direction: "up" }
      ],
      // Датчики
      sensors: [
        // Датчики температуры
        { id: 1, type: "temperature", name: "Т-101", x: 450, y: 250, status: "normal", value: "22°C" },
        { id: 2, type: "temperature", name: "Т-102", x: 150, y: 350, status: "normal", value: "23°C" },
        { id: 3, type: "temperature", name: "Т-103", x: 650, y: 350, status: "normal", value: "21°C" },
        { id: 4, type: "temperature", name: "Т-104", x: 650, y: 500, status: "warning", value: "26°C" },
        { id: 101, type: "temperature", name: "Т-105", x: 100, y: 200, status: "normal", value: "21°C" },
        { id: 102, type: "temperature", name: "Т-106", x: 200, y: 200, status: "normal", value: "22°C" },
        { id: 103, type: "temperature", name: "Т-107", x: 400, y: 150, status: "normal", value: "22°C" },
        { id: 104, type: "temperature", name: "Т-108", x: 700, y: 150, status: "normal", value: "20°C" },
        { id: 105, type: "temperature", name: "Т-109", x: 300, y: 500, status: "normal", value: "21°C" },
        { id: 106, type: "temperature", name: "Т-110", x: 450, y: 500, status: "normal", value: "22°C" },
        
        // Датчики влажности
        { id: 5, type: "humidity", name: "В-101", x: 600, y: 240, status: "normal", value: "45%" },
        { id: 6, type: "humidity", name: "В-102", x: 150, y: 500, status: "normal", value: "40%" },
        { id: 107, type: "humidity", name: "В-103", x: 80, y: 380, status: "warning", value: "60%" },
        { id: 108, type: "humidity", name: "В-104", x: 700, y: 400, status: "normal", value: "42%" },
        { id: 109, type: "humidity", name: "В-105", x: 400, y: 400, status: "normal", value: "45%" },
        { id: 110, type: "humidity", name: "В-106", x: 150, y: 200, status: "normal", value: "38%" },
        
        // Пожарные датчики
        { id: 7, type: "fire", name: "П-101", x: 350, y: 250, status: "normal", value: "OK" },
        { id: 8, type: "fire", name: "П-102", x: 500, y: 250, status: "normal", value: "OK" },
        { id: 9, type: "fire", name: "П-103", x: 150, y: 350, status: "normal", value: "OK" },
        { id: 10, type: "fire", name: "П-104", x: 700, y: 350, status: "normal", value: "OK" },
        { id: 11, type: "fire", name: "П-105", x: 700, y: 500, status: "normal", value: "OK" },
        { id: 111, type: "fire", name: "П-106", x: 100, y: 250, status: "normal", value: "OK" },
        { id: 112, type: "fire", name: "П-107", x: 250, y: 250, status: "normal", value: "OK" },
        { id: 113, type: "fire", name: "П-108", x: 450, y: 350, status: "normal", value: "OK" },
        { id: 114, type: "fire", name: "П-109", x: 550, y: 350, status: "normal", value: "OK" },
        { id: 115, type: "fire", name: "П-110", x: 250, y: 450, status: "normal", value: "OK" },
        { id: 116, type: "fire", name: "П-111", x: 350, y: 450, status: "normal", value: "OK" },
        { id: 117, type: "fire", name: "П-112", x: 450, y: 450, status: "normal", value: "OK" },
        { id: 118, type: "fire", name: "П-113", x: 550, y: 450, status: "normal", value: "OK" },
        { id: 119, type: "fire", name: "П-114", x: 300, y: 150, status: "normal", value: "OK" },
        { id: 120, type: "fire", name: "П-115", x: 500, y: 150, status: "normal", value: "OK" },
        
        // Датчики движения
        { id: 12, type: "movement", name: "Д-101", x: 450, y: 150, status: "alarm", value: "Движение" },
        { id: 13, type: "movement", name: "Д-102", x: 700, y: 175, status: "normal", value: "OK" },
        { id: 121, type: "movement", name: "Д-103", x: 280, y: 150, status: "normal", value: "OK" },
        { id: 122, type: "movement", name: "Д-104", x: 250, y: 250, status: "normal", value: "OK" },
        { id: 123, type: "movement", name: "Д-105", x: 550, y: 250, status: "normal", value: "OK" },
        { id: 124, type: "movement", name: "Д-106", x: 100, y: 350, status: "normal", value: "OK" },
        { id: 125, type: "movement", name: "Д-107", x: 300, y: 380, status: "normal", value: "OK" },
        { id: 126, type: "movement", name: "Д-108", x: 600, y: 380, status: "normal", value: "OK" },
        { id: 127, type: "movement", name: "Д-109", x: 100, y: 500, status: "normal", value: "OK" },
        { id: 128, type: "movement", name: "Д-110", x: 500, y: 500, status: "normal", value: "OK" },
        
        // Камеры безопасности
        { id: 14, type: "security", name: "К-101", x: 400, y: 175, status: "normal", value: "ОК", angle: 30 },
        { id: 15, type: "security", name: "К-102", x: 500, y: 175, status: "normal", value: "ОК", angle: -30 },
        { id: 16, type: "security", name: "К-103", x: 650, y: 240, status: "normal", value: "ОК", angle: -60 },
        { id: 129, type: "security", name: "К-104", x: 100, y: 150, status: "normal", value: "ОК", angle: 45 },
        { id: 130, type: "security", name: "К-105", x: 150, y: 250, status: "normal", value: "ОК", angle: 0 },
        { id: 131, type: "security", name: "К-106", x: 300, y: 350, status: "normal", value: "ОК", angle: 90 },
        { id: 132, type: "security", name: "К-107", x: 500, y: 350, status: "normal", value: "ОК", angle: -90 },
        { id: 133, type: "security", name: "К-108", x: 650, y: 450, status: "normal", value: "ОК", angle: -120 },
        { id: 134, type: "security", name: "К-109", x: 250, y: 500, status: "normal", value: "ОК", angle: 60 },
        { id: 135, type: "security", name: "К-110", x: 550, y: 500, status: "normal", value: "ОК", angle: -60 },
        
        // Другие датчики
        { id: 17, type: "water", name: "Л-101", x: 100, y: 480, status: "normal", value: "OK" },
        { id: 18, type: "power", name: "Э-101", x: 200, y: 480, status: "normal", value: "220V" },
        { id: 136, type: "water", name: "Л-102", x: 325, y: 350, status: "normal", value: "OK" },
        { id: 137, type: "water", name: "Л-103", x: 375, y: 350, status: "normal", value: "OK" },
        { id: 138, type: "power", name: "Э-102", x: 450, y: 400, status: "normal", value: "220V" },
        { id: 139, type: "power", name: "Э-103", x: 650, y: 150, status: "normal", value: "220V" },
        { id: 140, type: "gas", name: "Г-101", x: 80, y: 480, status: "normal", value: "OK" },
        { id: 141, type: "network", name: "С-101", x: 550, y: 400, status: "normal", value: "OK" },
        { id: 142, type: "network", name: "С-102", x: 450, y: 300, status: "normal", value: "OK" }
      ]
    },
    {
      id: 2,
      name: "Второй этаж",
      rooms: [
        // Центральный коридор (идентичный первому этажу)
        { id: 201, name: "Центральный коридор", x: 250, y: 200, width: 400, height: 100, type: "corridor" },
        
        // Помещения с левой стороны коридора
        { id: 202, name: "Кабинет математики", x: 50, y: 150, width: 100, height: 150, type: "classroom" },
        { id: 203, name: "Кабинет алгебры", x: 150, y: 150, width: 100, height: 150, type: "classroom" },
        { id: 204, name: "Кабинет геометрии", x: 50, y: 300, width: 100, height: 150, type: "classroom" },
        { id: 205, name: "Кабинет информатики", x: 150, y: 300, width: 100, height: 150, type: "classroom" },
        { id: 206, name: "Кабинет русского языка", x: 50, y: 450, width: 100, height: 100, type: "classroom" },
        { id: 207, name: "Кабинет литературы", x: 150, y: 450, width: 100, height: 100, type: "classroom" },
        
        // Помещения с правой стороны коридора
        { id: 208, name: "Учительская", x: 650, y: 150, width: 100, height: 150, type: "teachers" },
        { id: 209, name: "Кабинет завуча", x: 650, y: 300, width: 100, height: 150, type: "admin" },
        { id: 210, name: "Лаборатория физики", x: 650, y: 450, width: 100, height: 100, type: "lab" },
        { id: 211, name: "Лаборатория химии", x: 650, y: 550, width: 100, height: 50, type: "lab" },
        
        // Лестницы (в тех же местах, что и на первом этаже)
        { id: 212, name: "Лестница 1", x: 250, y: 300, width: 50, height: 50, type: "stairs" },
        { id: 213, name: "Лестница 2", x: 600, y: 300, width: 50, height: 50, type: "stairs" },
        
        // Туалеты (в тех же местах, что и на первом этаже)
        { id: 214, name: "Туалет М", x: 300, y: 300, width: 50, height: 50, type: "wc" },
        { id: 215, name: "Туалет Ж", x: 350, y: 300, width: 50, height: 50, type: "wc" },
        
        // Дополнительные помещения
        { id: 216, name: "Метод. кабинет", x: 450, y: 300, width: 100, height: 50, type: "admin" },
        { id: 217, name: "Библиотека", x: 250, y: 400, width: 250, height: 150, type: "library" },
        { id: 218, name: "Читальный зал", x: 500, y: 400, width: 150, height: 150, type: "library" }
      ],
      // Стены (идентичные первому этажу с добавлениями для новой планировки)
      walls: [
        // Внешние стены
        { id: 30, points: [50, 100, 750, 100], thickness: 10 },
        { id: 31, points: [50, 100, 50, 600], thickness: 10 },
        { id: 32, points: [750, 100, 750, 600], thickness: 10 },
        { id: 33, points: [50, 600, 750, 600], thickness: 10 },
        
        // Центральный коридор
        { id: 34, points: [250, 200, 650, 200], thickness: 5 },
        { id: 35, points: [250, 300, 650, 300], thickness: 5 },
        
        // Горизонтальные стены
        { id: 36, points: [50, 300, 750, 300], thickness: 5 },
        { id: 37, points: [50, 400, 250, 400], thickness: 5 },
        { id: 38, points: [50, 450, 750, 450], thickness: 5 },
        { id: 39, points: [50, 550, 750, 550], thickness: 5 },
        
        // Вертикальные стены
        { id: 40, points: [150, 100, 150, 600], thickness: 5 },
        { id: 41, points: [250, 100, 250, 600], thickness: 5 },
        { id: 42, points: [400, 300, 400, 350], thickness: 5 },
        { id: 43, points: [450, 300, 450, 450], thickness: 5 },
        { id: 44, points: [500, 300, 500, 600], thickness: 5 },
        { id: 45, points: [550, 300, 550, 400], thickness: 5 },
        { id: 46, points: [600, 100, 600, 600], thickness: 5 },
        { id: 47, points: [650, 100, 650, 600], thickness: 5 }
      ],
      // Двери
      doors: [
        // Двери в коридор с севера (верхняя часть)
        { id: 20, x: 100, y: 200, width: 30, height: 5, type: "room" }, // Класс 201
        { id: 21, x: 200, y: 200, width: 30, height: 5, type: "room" }, // Класс 202
        { id: 22, x: 700, y: 200, width: 30, height: 5, type: "room" }, // Учительская
        
        // Двери в боковые помещения из коридора (нижняя часть)
        { id: 23, x: 275, y: 300, width: 30, height: 5, type: "room" }, // Лестница 1
        { id: 24, x: 325, y: 300, width: 30, height: 5, type: "room" }, // Туалет М
        { id: 25, x: 375, y: 300, width: 30, height: 5, type: "room" }, // Туалет Ж
        { id: 26, x: 475, y: 300, width: 30, height: 5, type: "room" }, // Метод. кабинет
        { id: 27, x: 625, y: 300, width: 30, height: 5, type: "room" }, // Лестница 2
        { id: 28, x: 700, y: 300, width: 30, height: 5, type: "room" }, // Кабинет завуча
        
        // Остальные двери
        { id: 29, x: 100, y: 300, width: 30, height: 5, type: "room" }, // Класс 203
        { id: 30, x: 200, y: 300, width: 30, height: 5, type: "room" }, // Класс 204
        { id: 31, x: 100, y: 450, width: 30, height: 5, type: "room" }, // Класс 205
        { id: 32, x: 200, y: 450, width: 30, height: 5, type: "room" }, // Класс 206
        { id: 33, x: 350, y: 400, width: 30, height: 5, type: "room" }, // Библиотека
        { id: 34, x: 550, y: 400, width: 30, height: 5, type: "room" }, // Читальный зал
        { id: 35, x: 650, y: 500, width: 5, height: 30, angle: 90, type: "room" }, // Лаборатория физики
        { id: 36, x: 650, y: 575, width: 5, height: 30, angle: 90, type: "room" } // Лаборатория химии
      ],
      // Лестницы
      stairs: [
        { id: 3, x: 250, y: 300, width: 50, height: 50, steps: 10, direction: "both" },
        { id: 4, x: 600, y: 300, width: 50, height: 50, steps: 10, direction: "both" }
      ],
      // Датчики
      sensors: [
        // Датчики температуры
        { id: 19, type: "temperature", name: "Т-201", x: 100, y: 200, status: "normal", value: "21°C" },
        { id: 20, type: "temperature", name: "Т-202", x: 200, y: 200, status: "normal", value: "22°C" },
        { id: 21, type: "temperature", name: "Т-203", x: 450, y: 250, status: "normal", value: "22°C" },
        { id: 22, type: "temperature", name: "Т-204", x: 700, y: 200, status: "normal", value: "21°C" },
        { id: 23, type: "temperature", name: "Т-205", x: 100, y: 350, status: "normal", value: "21°C" },
        { id: 24, type: "temperature", name: "Т-206", x: 700, y: 350, status: "normal", value: "23°C" },
        { id: 25, type: "temperature", name: "Т-207", x: 700, y: 500, status: "warning", value: "27°C" },
        { id: 143, type: "temperature", name: "Т-208", x: 75, y: 200, status: "normal", value: "21°C" },
        { id: 144, type: "temperature", name: "Т-209", x: 175, y: 200, status: "normal", value: "22°C" },
        { id: 145, type: "temperature", name: "Т-210", x: 75, y: 350, status: "normal", value: "21°C" },
        { id: 146, type: "temperature", name: "Т-211", x: 175, y: 350, status: "normal", value: "22°C" },
        { id: 147, type: "temperature", name: "Т-212", x: 350, y: 450, status: "normal", value: "21°C" },
        { id: 148, type: "temperature", name: "Т-213", x: 550, y: 450, status: "normal", value: "21°C" },
        
        // Датчики влажности
        { id: 26, type: "humidity", name: "В-201", x: 400, y: 250, status: "normal", value: "45%" },
        { id: 27, type: "humidity", name: "В-202", x: 350, y: 350, status: "normal", value: "40%" },
        { id: 28, type: "humidity", name: "В-203", x: 350, y: 450, status: "normal", value: "42%" },
        { id: 149, type: "humidity", name: "В-204", x: 650, y: 200, status: "normal", value: "45%" },
        { id: 150, type: "humidity", name: "В-205", x: 200, y: 350, status: "normal", value: "40%" },
        { id: 151, type: "humidity", name: "В-206", x: 450, y: 500, status: "normal", value: "42%" },
        { id: 152, type: "humidity", name: "В-207", x: 600, y: 500, status: "normal", value: "40%" },
        
        // Пожарные датчики
        { id: 29, type: "fire", name: "П-201", x: 200, y: 250, status: "normal", value: "OK" },
        { id: 30, type: "fire", name: "П-202", x: 550, y: 250, status: "normal", value: "OK" },
        { id: 31, type: "fire", name: "П-203", x: 375, y: 350, status: "normal", value: "OK" },
        { id: 32, type: "fire", name: "П-204", x: 400, y: 500, status: "normal", value: "OK" },
        { id: 153, type: "fire", name: "П-205", x: 150, y: 225, status: "normal", value: "OK" },
        { id: 154, type: "fire", name: "П-206", x: 300, y: 250, status: "normal", value: "OK" },
        { id: 155, type: "fire", name: "П-207", x: 450, y: 280, status: "normal", value: "OK" },
        { id: 156, type: "fire", name: "П-208", x: 600, y: 250, status: "normal", value: "OK" },
        { id: 157, type: "fire", name: "П-209", x: 100, y: 400, status: "normal", value: "OK" },
        { id: 158, type: "fire", name: "П-210", x: 200, y: 400, status: "normal", value: "OK" },
        { id: 159, type: "fire", name: "П-211", x: 300, y: 450, status: "normal", value: "OK" },
        { id: 160, type: "fire", name: "П-212", x: 550, y: 350, status: "normal", value: "OK" },
        { id: 161, type: "fire", name: "П-213", x: 650, y: 400, status: "normal", value: "OK" },
        { id: 162, type: "fire", name: "П-214", x: 700, y: 450, status: "normal", value: "OK" },
        
        // Датчики движения
        { id: 33, type: "movement", name: "Д-201", x: 650, y: 250, status: "normal", value: "OK" },
        { id: 34, type: "movement", name: "Д-202", x: 350, y: 500, status: "normal", value: "OK" },
        { id: 163, type: "movement", name: "Д-203", x: 100, y: 250, status: "normal", value: "OK" },
        { id: 164, type: "movement", name: "Д-204", x: 200, y: 250, status: "normal", value: "OK" },
        { id: 165, type: "movement", name: "Д-205", x: 350, y: 250, status: "normal", value: "OK" },
        { id: 166, type: "movement", name: "Д-206", x: 500, y: 250, status: "normal", value: "OK" },
        { id: 167, type: "movement", name: "Д-207", x: 650, y: 500, status: "normal", value: "OK" },
        { id: 168, type: "movement", name: "Д-208", x: 500, y: 500, status: "normal", value: "OK" },
        { id: 169, type: "movement", name: "Д-209", x: 250, y: 450, status: "normal", value: "OK" },
        
        // Камеры безопасности
        { id: 35, type: "security", name: "К-201", x: 350, y: 250, status: "normal", value: "ОК", angle: 30 },
        { id: 36, type: "security", name: "К-202", x: 550, y: 250, status: "normal", value: "ОК", angle: -30 },
        { id: 170, type: "security", name: "К-203", x: 275, y: 250, status: "normal", value: "ОК", angle: 0 },
        { id: 171, type: "security", name: "К-204", x: 450, y: 250, status: "normal", value: "ОК", angle: 0 },
        { id: 172, type: "security", name: "К-205", x: 100, y: 300, status: "normal", value: "ОК", angle: 90 },
        { id: 173, type: "security", name: "К-206", x: 200, y: 300, status: "normal", value: "ОК", angle: 90 },
        { id: 174, type: "security", name: "К-207", x: 700, y: 300, status: "normal", value: "ОК", angle: -90 },
        { id: 175, type: "security", name: "К-208", x: 350, y: 475, status: "normal", value: "ОК", angle: 45 },
        { id: 176, type: "security", name: "К-209", x: 550, y: 475, status: "normal", value: "ОК", angle: -45 },
        
        // Специализированные датчики
        { id: 37, type: "gas", name: "Г-201", x: 700, y: 575, status: "normal", value: "OK" },
        { id: 38, type: "water", name: "Л-201", x: 650, y: 575, status: "normal", value: "OK" },
        { id: 177, type: "water", name: "Л-202", x: 325, y: 350, status: "normal", value: "OK" },
        { id: 178, type: "water", name: "Л-203", x: 375, y: 350, status: "normal", value: "OK" },
        { id: 179, type: "power", name: "Э-201", x: 200, y: 175, status: "normal", value: "220V" },
        { id: 180, type: "power", name: "Э-202", x: 700, y: 175, status: "normal", value: "220V" },
        { id: 181, type: "power", name: "Э-203", x: 300, y: 450, status: "normal", value: "220V" },
        { id: 182, type: "network", name: "С-201", x: 150, y: 350, status: "normal", value: "OK" },
        { id: 183, type: "network", name: "С-202", x: 500, y: 350, status: "normal", value: "OK" },
        
        // Датчики для кабинета русского языка и литературы
        { id: 230, type: "temperature", name: "Т-214", x: 100, y: 500, status: "normal", value: "21°C" },
        { id: 231, type: "temperature", name: "Т-215", x: 200, y: 500, status: "normal", value: "22°C" },
        { id: 232, type: "fire", name: "П-215", x: 75, y: 480, status: "normal", value: "OK" },
        { id: 233, type: "fire", name: "П-216", x: 175, y: 480, status: "normal", value: "OK" },
        { id: 234, type: "movement", name: "Д-210", x: 100, y: 480, status: "normal", value: "OK" },
        { id: 235, type: "movement", name: "Д-211", x: 200, y: 480, status: "normal", value: "OK" },
        { id: 236, type: "humidity", name: "В-208", x: 100, y: 460, status: "normal", value: "45%" },
        { id: 237, type: "humidity", name: "В-209", x: 200, y: 460, status: "normal", value: "43%" }
      ]
    },
    {
      id: 3,
      name: "Третий этаж",
      rooms: [
        // Центральный коридор (идентичный предыдущим этажам)
        { id: 301, name: "Центральный коридор", x: 250, y: 200, width: 400, height: 100, type: "corridor" },
        
        // Помещения с левой стороны коридора
        { id: 302, name: "Компьютерный класс", x: 50, y: 150, width: 200, height: 150, type: "computer" },
        { id: 303, name: "Кабинет робототехники", x: 50, y: 300, width: 200, height: 150, type: "computer" },
        { id: 304, name: "Кабинет ИЗО", x: 50, y: 450, width: 100, height: 100, type: "art" },
        { id: 305, name: "Кабинет музыки", x: 150, y: 450, width: 100, height: 100, type: "music" },
        { id: 306, name: "Архив", x: 50, y: 550, width: 200, height: 50, type: "storage" },
        
        // Помещения с правой стороны коридора
        { id: 307, name: "Лингафонный кабинет", x: 650, y: 150, width: 100, height: 150, type: "language" },
        { id: 308, name: "Кабинет английского языка", x: 650, y: 300, width: 100, height: 150, type: "language" },
        { id: 309, name: "Серверная", x: 650, y: 450, width: 100, height: 100, type: "server" },
        { id: 310, name: "Техническое помещение", x: 650, y: 550, width: 100, height: 50, type: "technical" },
        { id: 311, name: "Кабинет технологии", x: 650, y: 450, width: 100, height: 150, type: "club" },
        
        // Лестницы (в тех же местах, что и на других этажах)
        { id: 312, name: "Лестница 1", x: 250, y: 300, width: 50, height: 50, type: "stairs" },
        { id: 313, name: "Лестница 2", x: 600, y: 300, width: 50, height: 50, type: "stairs" },
        
        // Туалеты (в тех же местах, что и на других этажах)
        { id: 314, name: "Туалет М", x: 300, y: 300, width: 50, height: 50, type: "wc" },
        { id: 315, name: "Туалет Ж", x: 350, y: 300, width: 50, height: 50, type: "wc" },
        
        // Дополнительные помещения
        { id: 316, name: "Конференц-зал", x: 450, y: 300, width: 150, height: 50, type: "conference" },
        { id: 317, name: "Медиатека", x: 250, y: 400, width: 400, height: 150, type: "media" },
        { id: 318, name: "Кабинет психолога", x: 400, y: 350, width: 50, height: 50, type: "admin" }
      ],
      // Стены
      walls: [
        // Внешние стены
        { id: 60, points: [50, 100, 750, 100], thickness: 10 },
        { id: 61, points: [50, 100, 50, 600], thickness: 10 },
        { id: 62, points: [750, 100, 750, 600], thickness: 10 },
        { id: 63, points: [50, 600, 750, 600], thickness: 10 },
        
        // Центральный коридор
        { id: 64, points: [250, 200, 650, 200], thickness: 5 },
        { id: 65, points: [250, 300, 650, 300], thickness: 5 },
        
        // Горизонтальные стены
        { id: 66, points: [50, 300, 750, 300], thickness: 5 },
        { id: 67, points: [50, 400, 250, 400], thickness: 5 },
        { id: 68, points: [50, 450, 750, 450], thickness: 5 },
        { id: 69, points: [50, 550, 750, 550], thickness: 5 },
        
        // Вертикальные стены
        { id: 70, points: [150, 450, 150, 600], thickness: 5 },
        { id: 71, points: [250, 100, 250, 600], thickness: 5 },
        { id: 72, points: [400, 300, 400, 350], thickness: 5 },
        { id: 73, points: [450, 300, 450, 400], thickness: 5 },
        { id: 74, points: [600, 100, 600, 600], thickness: 5 },
        { id: 75, points: [650, 100, 650, 600], thickness: 5 },
        { id: 76, points: [750, 450, 750, 600], thickness: 5 }
      ],
      // Двери
      doors: [
        // Двери в коридор с севера (верхняя часть)
        { id: 40, x: 150, y: 200, width: 30, height: 5, type: "room" }, // Компьютерный класс 1
        { id: 41, x: 700, y: 200, width: 30, height: 5, type: "room" }, // Лингафонный кабинет
        
        // Двери в боковые помещения из коридора (нижняя часть)
        { id: 42, x: 275, y: 300, width: 30, height: 5, type: "room" }, // Лестница 1
        { id: 43, x: 325, y: 300, width: 30, height: 5, type: "room" }, // Туалет М
        { id: 44, x: 375, y: 300, width: 30, height: 5, type: "room" }, // Туалет Ж
        { id: 45, x: 525, y: 300, width: 30, height: 5, type: "room" }, // Конференц-зал
        { id: 46, x: 625, y: 300, width: 30, height: 5, type: "room" }, // Лестница 2
        
        // Остальные двери
        { id: 47, x: 150, y: 300, width: 30, height: 5, type: "room" }, // Компьютерный класс 2
        { id: 48, x: 700, y: 300, width: 30, height: 5, type: "room" }, // Кабинет иностр. языков
        { id: 49, x: 100, y: 450, width: 30, height: 5, type: "room" }, // Класс ИЗО
        { id: 50, x: 200, y: 450, width: 30, height: 5, type: "room" }, // Класс музыки
        { id: 51, x: 150, y: 550, width: 30, height: 5, type: "room" }, // Архив
        { id: 52, x: 400, y: 400, width: 30, height: 5, type: "room" }, // Медиатека
        { id: 53, x: 700, y: 450, width: 30, height: 5, type: "room" }, // Серверная
        { id: 54, x: 700, y: 550, width: 30, height: 5, type: "room" }, // Техническое помещение
        { id: 55, x: 700, y: 500, width: 5, height: 30, angle: 90, type: "room" } // Кружковая
      ],
      // Лестницы
      stairs: [
        { id: 5, x: 250, y: 300, width: 50, height: 50, steps: 10, direction: "down" },
        { id: 6, x: 600, y: 300, width: 50, height: 50, steps: 10, direction: "down" }
      ],
      // Датчики
      sensors: [
        // Датчики температуры
        { id: 39, type: "temperature", name: "Т-301", x: 150, y: 200, status: "normal", value: "22°C" },
        { id: 40, type: "temperature", name: "Т-302", x: 450, y: 250, status: "normal", value: "22°C" },
        { id: 41, type: "temperature", name: "Т-303", x: 700, y: 200, status: "normal", value: "21°C" },
        { id: 42, type: "temperature", name: "Т-304", x: 150, y: 350, status: "normal", value: "21°C" },
        { id: 43, type: "temperature", name: "Т-305", x: 700, y: 350, status: "normal", value: "21°C" },
        { id: 44, type: "temperature", name: "Т-306", x: 100, y: 500, status: "normal", value: "20°C" },
        { id: 45, type: "temperature", name: "Т-307", x: 700, y: 500, status: "warning", value: "28°C" },
        { id: 184, type: "temperature", name: "Т-308", x: 350, y: 200, status: "normal", value: "22°C" },
        { id: 185, type: "temperature", name: "Т-309", x: 550, y: 200, status: "normal", value: "22°C" },
        { id: 186, type: "temperature", name: "Т-310", x: 150, y: 250, status: "normal", value: "21°C" },
        { id: 187, type: "temperature", name: "Т-311", x: 350, y: 300, status: "normal", value: "22°C" },
        { id: 188, type: "temperature", name: "Т-312", x: 550, y: 300, status: "normal", value: "22°C" },
        { id: 189, type: "temperature", name: "Т-313", x: 450, y: 475, status: "normal", value: "21°C" },
        
        // Датчики влажности
        { id: 46, type: "humidity", name: "В-301", x: 250, y: 200, status: "normal", value: "40%" },
        { id: 47, type: "humidity", name: "В-302", x: 400, y: 250, status: "normal", value: "45%" },
        { id: 48, type: "humidity", name: "В-303", x: 600, y: 200, status: "normal", value: "42%" },
        { id: 190, type: "humidity", name: "В-304", x: 150, y: 300, status: "normal", value: "40%" },
        { id: 191, type: "humidity", name: "В-305", x: 100, y: 200, status: "normal", value: "42%" },
        { id: 192, type: "humidity", name: "В-306", x: 70, y: 500, status: "normal", value: "40%" },
        { id: 193, type: "humidity", name: "В-307", x: 650, y: 500, status: "warning", value: "60%" },
        
        // Пожарные датчики
        { id: 49, type: "fire", name: "П-301", x: 150, y: 350, status: "normal", value: "OK" },
        { id: 50, type: "fire", name: "П-302", x: 400, y: 350, status: "normal", value: "OK" },
        { id: 51, type: "fire", name: "П-303", x: 600, y: 350, status: "normal", value: "OK" },
        { id: 52, type: "fire", name: "П-304", x: 400, y: 500, status: "normal", value: "OK" },
        { id: 194, type: "fire", name: "П-305", x: 100, y: 225, status: "normal", value: "OK" },
        { id: 195, type: "fire", name: "П-306", x: 200, y: 225, status: "normal", value: "OK" },
        { id: 196, type: "fire", name: "П-307", x: 300, y: 250, status: "normal", value: "OK" },
        { id: 197, type: "fire", name: "П-308", x: 500, y: 250, status: "normal", value: "OK" },
        { id: 198, type: "fire", name: "П-309", x: 250, y: 350, status: "normal", value: "OK" },
        { id: 199, type: "fire", name: "П-310", x: 500, y: 350, status: "normal", value: "OK" },
        { id: 200, type: "fire", name: "П-311", x: 100, y: 450, status: "normal", value: "OK" },
        { id: 201, type: "fire", name: "П-312", x: 200, y: 450, status: "normal", value: "OK" },
        { id: 202, type: "fire", name: "П-313", x: 300, y: 450, status: "normal", value: "OK" },
        { id: 203, type: "fire", name: "П-314", x: 500, y: 450, status: "normal", value: "OK" },
        { id: 204, type: "fire", name: "П-315", x: 600, y: 450, status: "normal", value: "OK" },
        
        // Датчики движения
        { id: 55, type: "movement", name: "Д-301", x: 450, y: 350, status: "normal", value: "OK" },
        { id: 56, type: "movement", name: "Д-302", x: 450, y: 500, status: "normal", value: "OK" },
        { id: 205, type: "movement", name: "Д-303", x: 150, y: 150, status: "normal", value: "OK" },
        { id: 206, type: "movement", name: "Д-304", x: 700, y: 150, status: "normal", value: "OK" },
        { id: 207, type: "movement", name: "Д-305", x: 250, y: 250, status: "normal", value: "OK" },
        { id: 208, type: "movement", name: "Д-306", x: 550, y: 250, status: "normal", value: "OK" },
        { id: 209, type: "movement", name: "Д-307", x: 150, y: 375, status: "normal", value: "OK" },
        { id: 210, type: "movement", name: "Д-308", x: 350, y: 400, status: "normal", value: "OK" },
        { id: 211, type: "movement", name: "Д-309", x: 550, y: 400, status: "normal", value: "OK" },
        { id: 212, type: "movement", name: "Д-310", x: 150, y: 450, status: "normal", value: "OK" },
        { id: 213, type: "movement", name: "Д-311", x: 700, y: 450, status: "normal", value: "OK" },
        
        // Камеры безопасности
        { id: 57, type: "security", name: "К-301", x: 350, y: 250, status: "normal", value: "ОК", angle: 30 },
        { id: 58, type: "security", name: "К-302", x: 550, y: 250, status: "normal", value: "ОК", angle: -30 },
        { id: 214, type: "security", name: "К-303", x: 150, y: 175, status: "normal", value: "ОК", angle: 45 },
        { id: 215, type: "security", name: "К-304", x: 450, y: 175, status: "normal", value: "ОК", angle: 0 },
        { id: 216, type: "security", name: "К-305", x: 700, y: 175, status: "normal", value: "ОК", angle: -45 },
        { id: 217, type: "security", name: "К-306", x: 150, y: 300, status: "normal", value: "ОК", angle: 90 },
        { id: 218, type: "security", name: "К-307", x: 700, y: 300, status: "normal", value: "ОК", angle: -90 },
        { id: 219, type: "security", name: "К-308", x: 150, y: 500, status: "normal", value: "ОК", angle: 120 },
        { id: 220, type: "security", name: "К-309", x: 450, y: 450, status: "normal", value: "ОК", angle: 0 },
        { id: 221, type: "security", name: "К-310", x: 700, y: 500, status: "normal", value: "ОК", angle: -120 },
        
        // Специализированные датчики
        { id: 53, type: "server", name: "С-301", x: 700, y: 500, status: "warning", value: "Высокая нагрузка" },
        { id: 54, type: "power", name: "Э-301", x: 700, y: 575, status: "normal", value: "220V" },
        { id: 222, type: "water", name: "Л-301", x: 325, y: 350, status: "normal", value: "OK" },
        { id: 223, type: "water", name: "Л-302", x: 375, y: 350, status: "normal", value: "OK" },
        { id: 224, type: "power", name: "Э-302", x: 150, y: 225, status: "normal", value: "220V" },
        { id: 225, type: "power", name: "Э-303", x: 400, y: 300, status: "normal", value: "220V" },
        { id: 226, type: "power", name: "Э-304", x: 350, y: 500, status: "normal", value: "220V" },
        { id: 227, type: "network", name: "С-302", x: 100, y: 250, status: "normal", value: "OK" },
        { id: 228, type: "network", name: "С-303", x: 650, y: 250, status: "normal", value: "OK" },
        { id: 229, type: "gas", name: "Г-301", x: 180, y: 480, status: "normal", value: "OK" },
        
        // Датчики для архива
        { id: 240, type: "temperature", name: "Т-314", x: 100, y: 575, status: "normal", value: "19°C" },
        { id: 241, type: "humidity", name: "В-308", x: 150, y: 575, status: "normal", value: "35%" },
        { id: 242, type: "fire", name: "П-316", x: 120, y: 560, status: "normal", value: "OK" },
        { id: 243, type: "movement", name: "Д-312", x: 150, y: 560, status: "normal", value: "OK" },
        { id: 244, type: "security", name: "К-311", x: 180, y: 560, status: "normal", value: "ОК", angle: 180 }
      ]
    }
  ]
};

export default schoolData; 