import React from 'react';

const PostPreview = ({post, noImage}) => {
    return (
        <div className="post-preview">
            {
                (() => {
                    if (!noImage) {
                        return (
                            <div className="cover-image-wrapper">
                                <img className="cover-image" src={ (() => post.coverImage !== null ? post.coverImage.url : 'https://media-exp1.licdn.com/dms/image/C4E1BAQErE1VCVPWvUQ/company-background_10000/0/1560357743378?e=1617372000&v=beta&t=N_Bp7Pp4kDYPRMlx1B47pTJ32h2QoRxlt-Csu39pzEA')() } />
                            </div>
                        )
                    } else {
                        return null;
                    }
                })()
            }
            <span className="read-more-btn">Read</span>
            <div>
                <h5 className="title">{ post.title }</h5>
                <div className="text-center">
                    <span className="tag">Author</span> <span className="author">{ Array.isArray(post.author) ? post.author.join(", ") : post.author }</span>
                </div>
            </div>
            <div className="body">
                { post.body }
            </div>
        </div>
    );
};

export default PostPreview;