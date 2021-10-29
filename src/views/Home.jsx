import React from 'react';
import { Query } from 'react-apollo';
import PostsPreview from '../components/postPreview';
import TrendingPosts from '../components/Trending';
import GraphCMSContent from '../services/graphcms';


const Home = props => {
    const [posts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();

    const LoadingPostsJsx = () => (
        <div>
            Loading...
        </div>
    );

    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );

    return (
        <div id="home_view">
            <div className="container p-2 mx-auto row">
                <div className="col-8">
                    <h3>Recent Articles</h3>
                    <div className="border p-3">
                        <Query query={Client.fetchPosts()}>
                            {
                                ({loading, error, data}) => {
                                    if (loading) return LoadingPostsJsx();
                                    if (error) {
                                        console.log(error);
                                        return ErrorLoadingPostsJsx();
                                    }

                                    const POSTS = data.posts;
                                    setPosts(POSTS);

                                    return POSTS.slice(0,6).map(post => (
                                        <PostsPreview post={post} />
                                    ));
                                }
                            }
                        </Query>
                    </div>
                </div>
                <div className="col-4 border bg-secondary p-2 sidebar">
                    <TrendingPosts posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default Home;