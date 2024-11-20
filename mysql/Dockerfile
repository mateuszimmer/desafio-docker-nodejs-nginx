FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

WORKDIR /var/lib/mysql

CMD [ "--innodb-use-native-aio=0" ]