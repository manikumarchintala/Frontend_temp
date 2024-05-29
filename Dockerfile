FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/

COPY style.css /usr/share/nginx/html/

COPY main.js /usr/share/nginx/html/

EXPOSE 80
