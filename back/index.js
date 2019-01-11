const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const cors = require('cors');

const passport = require("passport");
const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const express = require("express");

const resolvers = {
    Query: {
        project: (_, args, context, info) => {
            return context.prisma.query.project({where: args}, info);
        },
        projects: (_, args, context, info) => {
            return context.prisma.query.projects({args}, info);
        },
        technologies: (_, args, context, info) => {
            return context.prisma.query.technologies({args}, info);
        },
        images: (_, args, context, info) => {
            return context.prisma.query.images({args}, info);
        },
        technologyTypes: (_, args, context, info) => {
            return context.prisma.query.technologyTypes({args}, info);
        },
        users: (_, args, context, info) => {
            return context.prisma.query.users({args}, info);
        }
    },
    // Mutation: {
    // }
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        prisma: new Prisma({
            typeDefs: 'generated/prisma.graphql',
            endpoint: 'http://prisma:4466',
        }),
    }),
});

server.use(cors());

server.use(express.static("public"));
server.use(session({
    genid: function (req) {
        return uuid.v4();
    },
    secret: 'M/P?z"1ZR@a&zdaj]'
}));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(passport.initialize());
server.use(passport.session());

async function updateToken(user, token) {
    console.log(token);
    const query = `
        mutation editUser($id: ID!, $token: String!) {
            updateUser(
                where: {
                    id: $id
                }, data: {
                    token: $token
                }) {
                id
                email
                passwd
                name
                token
            }
        }
    `;
    const variables = {
        id: user.id,
        token: token
    };

    // await fetch('http://prisma:4466', {
    await fetch('http://prisma:4466', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    });
}

server.post('/login', async function (req, res) {
    console.log(req.body);
    const query = `
    query getUsers {
        users {
  	        id
            name
            email
            passwd
	    }
    }
    `;
    const variables = {};

    await fetch('http://prisma:4466', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    })
        .then(response => response.json())
        .then(response => {
            const users = response.data.users;
            const user = users.find(elem => elem.email === req.body.email);
            if (user === undefined)
                res.status(401).send({message: "incorrect email"});
            else if (user.passwd !== req.body.password)
                res.status(401).send({message: "incorrect password"});
            else {
                let token = uuid.v4();
                user.token = token;
                updateToken(user, token);
                delete user.passwd;
                res.status(200).send(user);
            }
        })
        .catch((e) => {
            res.status(400).send(e)
        });
});

server.post('/logged', async function (req, res) {
    const query = `
    query getUser($id: ID!) {
        user(where: {id: $id}) {
  	        id
            name
            email
            token
	    }
    }
    `;
    const variables = {id: req.body.id};

    await fetch('http://prisma:4466', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const user = response.data.user;
            if (user === undefined)
                res.status(401).send({message: "incorrect user"});
            else if (user.token !== req.body.token)
                res.status(401).send({message: "incorrect token"});
            else {
                res.status(200).send(user);
            }
        })
        .catch((e) => {
            res.status(400).send(e)
        });
});

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));