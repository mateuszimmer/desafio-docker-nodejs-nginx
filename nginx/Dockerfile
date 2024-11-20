FROM nginx:1.26.2-alpine-perl

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;'"]