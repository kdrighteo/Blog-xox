import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';

const CREATE_POST = ({title, body, author}) => gql`
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

const createPostApi = async post => {
    const query = CREATE_POST(post);
    console.log(query)
    const graphcms = new GraphQLClient(
        'https://api-eu-central-1.graphcms.com/v2/ckmvxjpn3zr6j01z11fj236wm/master',
    {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTcyMjExNjAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrbXZ4anBuM3pyNmowMXoxMWZqMjM2d20vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWM0NjUwNmUtZDE2Yy00OTI4LWE3NzgtMGZkN2E1MzExNDdiIiwianRpIjoiY2tteHZxMXFxdm0wcDAxeGtjY3VtNnM5OSJ9.e4hbvYRxrut-O1wkDNACIPeRzJ4C6YSILl6pZMDL3GFOyg_Rw4VScqsXpGsAXkZOxwt8V6WJmmTVJ2qC8WFpmngfBli2BdlRVL_gzT1MN-eAuRZktmAeFTKSzFyhvV_SProCEBlCRhGaTk5hUX9_rlqlVhNBROZcqLjEcLee6HsuEETzVUcR8qUW65yMqcDRZxl9_d0aTzVBwSORp0jUVUA8WLSsa2jnqmk34cpkMx5LEQct_zhHDsk11pFyhLsXQ6VZwlbFuO3GA4DPnsHB-4LIarh-N48-8ufF7855jTPOIEr_tMqqVoHGPf6plxAg9shbffJSYEijrIjrp1Aa19zXArSCzL6TbH2C-2xOCzUzGvp7sksbgSe45nREYS7zJt1xbUvJwFJt3lPMLr8hJl3wgjraoNbcL4nHhh_e2wfFsoNlcLn1mQzZYDKGmkr8pNTVnd_l01clqa5EuOw3gdlcx1cYiN5YMCn9NhY7gMH1wKAAD7Pm6OB3VRr63Xbt9s1Dp4H9mV1v_rapR-yYXmafapYv7a_OqqJM6BexK-CeplBvpTLu7AtkBIBDEf1aGvCaxIYvjVDjpgh3_9UqOHf6jix80_DJvsh44iHseDOf3rBQpaN07QK8SEqpNcPwAeo1sq-B8r2rOI-spvwWyCGARHu3rhDv9AYYeXP-K94`
      },
    }
  );

  try {
    // const data = await graphcms.request(
    //   CREATE_POST,
    //   { title: post.title, author: post.author, body: post.body }
    // );
    const data = await graphcms.request(
      query
    );
    return data ?? 'nothing';
  } catch(e) {
    console.log("GR error:>> ", e);
  }
};


export default createPostApi;