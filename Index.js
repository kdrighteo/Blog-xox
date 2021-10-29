const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema} = require('graphql');

const app = express();

const posts = [];

app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHTTP({
      schema: buildSchema(`
      type Post{
          _id: ID!
          title:  String!
            author: String!
            body:   String!
            comments: String
            date: String
            hidden: Boolean
      }
      input PostInput{
        title:  String!
        author: String!
        body:   String!
        comments: String
        date: String
        hidden: Boolean
    }
      type myQuery{
          posts : [Post!]!
        }
      type myMutation{
          createPost(postInput: PostInput) :Post
        }
        schema{
            query: myQuery
            mutation: myMutation
        }
      `),
      rootValue: {
          posts: ()=>{
              return posts;
          },
          createPost: (args) => {
              const post ={
                _id:  Math.random().toString(),
                title: args.postInput.title,
                author: args.postInput.author,
                body:args.postInput.body,
                comments: args.postInput.comments,
                date: Date.now().toString(),
                hidden: args.postInput.hidden,
              };
              posts.push(post);
              return post;
          }
      },
      graphiql: true
    })
  );

app.listen(3000);
