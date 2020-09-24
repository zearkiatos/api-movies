/* eslint-disable no-undef */
db.auth('admin', 'password');
db.getSiblingDB('mongodb');
db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "userAdminAnyDatabase",
                db: "admin"
            }
        ]
    }
);
db.createCollection('movies', {autoIndexId: true});