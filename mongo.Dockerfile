FROM mongo:latest
RUN mkdir -p /data/db2 \
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db2

COPY ./src/data/db2 /data/db2

RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db2 \
    && CREATE_FILES=/data/db2/scripts/*-create.js \
    && for f in $CREATE_FILES; do mongo 127.0.0.1:27017 $f; done \
    && mongod --dbpath /data/db2 --shutdown \
    && chown -R mongodb /data/db
VOLUME /data/db2

CMD ["mongod", "--config", "/etc/mongodb.conf"]
