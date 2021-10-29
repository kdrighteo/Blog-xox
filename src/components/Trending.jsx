import React from 'react';
import PostPreview from './postPreview';


const TrendingPosts = ({posts}) => {
    return (
        <div>
            <h5 className="text-white text-center">Trending Posts</h5>
            {
                posts.filter(post => post.trending == true).map(post => (
                    <div style={{ maxHeight: '210px', overflow: 'hidden', marginBottom: '1em' }}>
                        <PostPreview post={post} noImage />
                    </div>
                ))
            }
        </div>
    );
};

export default TrendingPosts;