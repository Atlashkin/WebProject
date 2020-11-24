# Требования
## Визуальная новелла "Игра на отчисление"
1. Приложение 
1.1. Аутентификация
  1.2. Регистрация
  
  2. Модерирование
  2.1. Аналитика прогресса за последнее игровое время 
  2.2. Вывод общего игрового времени
  2.3. Возможность игроку самому выбирать имя главного героя
  2.4. Возможность сохранять результат предыдущей игры
  2.5. Подключение БД
  2.6. Выбор новой истории для игры
  
  3. Документация
  3.1. Список версий
  3.2. Список страниц
  3.3. Версионирование изменений
  3.4. Поиск
  3.5. Построение навигации по *.md файлу
  3.6. Отслеживание изменений github в ветке + файле (возможность привязки)

4. Дата-провайдеры
 4.1. Импорт результата в соц.сети

 5. Runtime
 5.1. Доступность: максимальное время простоя приложения около нескольких часов. 
 5.2. Надежность: при автоматическом перезапуске системы или при других внештатных ситуациях, включающих в себя выключение компьютера или выхода из приложения, данные сохраняются 
 5.3. Требования к времени хранения данных: использование БД в качестве постоянного хранилища данных
 5.4. Продолжительность хранения данных: неопределенное количество времени