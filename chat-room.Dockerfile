FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 4001

WORKDIR /usr/share/nginx/html
COPY ./dist/apps/chat-room .
