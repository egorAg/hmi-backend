# Используем официальный образ PostgreSQL
FROM postgres:latest

# Задаём переменные окружения
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_DB=mydatabase

# При необходимости вы можете добавить копирование SQL-файлов в образ
# для автоматической инициализации базы. Например:
# COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
