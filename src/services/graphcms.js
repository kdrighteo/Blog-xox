import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';


export default class GraphCMSContent {
    constructor() {
        dotenv.config();
        
        this.Client = new GraphQLClient(
            process.env.REACT_APP_GCMS_URL,
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_GCMS_AUTH}`
                }
            }
        );
    }


    fetchPosts() {
        const QUERY = gql`
            query {
                posts {
                id
                title
                body
                author
                createdAt
                coverImage {
                    id
                    url
                }
                trending
                }
            }
        `;
        return QUERY;
    };

    async createPost({title, body, author}) {
        const QUERY = gql`
            mutation {
                createPost(data: {
                    title: "${title}",
                    author: "${author}",
                    body: "${body}"
                }) {
                    id
                    title
                    body
                    author
                }
            }
        `;
        
        try {
            const data = await this.Client.request(QUERY);
            return data;
        } catch(error) {
            console.log("Error at createPost:>>", error);
            return false;
        }
    }

    async updatePost(post_id, { title, author, body }) {
        const QUERY = gql`
            mutation {
                updatePost(
                    where: { id: "${post_id}" }
                    data: { title: "${title}", author: "${author}", body: "${body}" }
                ) {
                    id
                    title
                    body
                    author
                }
            }
        `;

        try {
            const data = await this.Client.request(QUERY);
            return data;
        } catch(error) {
            console.log("Error at updatePost:>>", error);
            return false;
        }
    }
}