FROM nginx:latest
COPY nginx.conf nginx.conf
COPY /dist/sat-front /usr/share/nginx/html
