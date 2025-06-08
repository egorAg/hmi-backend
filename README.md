# 🛒 Интернет-магазин API (NestJS)

## 🚀 Описание проекта
Это backend-приложение для интернет-магазина, построенное на **NestJS** с **TypeORM**, **JWT-авторизацией** и **поддержкой Swagger**.

## ✅ Требования для запуска
- **Node.js** v22 и выше
- **Docker** (для базы данных)

## 🛠 Установка зависимостей
Перед запуском установите зависимости:

```shell
npm install
```
или
```shell
yarn install
```

---

## 🗄 Запуск базы данных (PostgreSQL)
Для локального запуска базы данных используйте `Dockerfile`:

```shell
docker build -t postgres-db -f database/Dockerfile .
```
```shell
docker run -d --name postgres-db -p 5432:5432 postgres-db
```

После этого PostgreSQL будет работать на `localhost:5432`.

---

## 📜 Запуск миграций
Перед первым запуском необходимо выполнить миграции:

```shell
npm run migration:run
```
или
```shell
yarn migration:run
```


Если нужно создать новую миграцию:
```shell
npm run migration:generate
```
или 
```shell
yarn migration:generate
```

---

## 🚀 Запуск приложения
После настройки базы данных и выполнения миграций можно запустить сервер:

```shell
npm run start
```
или
```shell
yarn start
```

Для разработки с автоматическим перезапуском:

```shell
npm run start:dev
```
или
```shell
yarn start:dev
```

Сервер запустится на **`http://localhost:4000`**.

---

## 🔒 Авторизация и токены
Для работы с API используется **JWT-аутентификация**.
1. **Зарегистрируйтесь:** `POST /auth/register`
2. **Войдите в систему:** `POST /auth/login`
3. **Используйте полученный `access_token`** в заголовке:

```json
{"Authorization": "Bearer your_access_token"}
```
4. **Теперь можно отправлять запросы к защищенным эндпоинтам!** 🔥

---

## 📜 Документация API (Swagger)
После запуска приложения Swagger-документация доступна по адресу:  
📌 **`http://localhost:3000/api-docs`**

Там можно:
- Посмотреть все эндпоинты
- Протестировать API прямо в браузере
- Авторизоваться через JWT-токен

---

## 🛠 Полезные команды
| Команда                        | Описание |
|--------------------------------|---------------------------------|
| `npm run start` / `yarn start` | Запуск приложения |
| `npm run start:dev` / `yarn start:dev` | Запуск в режиме разработки |
| `npm run migration:run` / `yarn migration:run` | Применение миграций |
| `npm run migration:generate -- src/infrastructure/database/migrations/Init` | Генерация новой миграции |
| `docker build -t postgres-db -f database/dockerfile .` | Сборка контейнера с базой |
| `docker run -d --name postgres-db -p 5432:5432 postgres-db` | Запуск контейнера с базой |

---

## 🔥 Готово!
Теперь у Вас есть **полностью рабочий API** с **аутентификацией, документацией и подключением к базе**! 🚀

Если что-то не работает — проверь **зависимости и миграции**, а также убедись, что **PostgreSQL** запущен.  
Удачи! 🎉
