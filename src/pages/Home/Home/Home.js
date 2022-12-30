import React from 'react';
import Media from '../../Media/Media';
import AddPost from './AddPost/AddPost';
import PostCard from './PostCard/PostCard';

const Home = () => {
    return (
        <div>
           <PostCard></PostCard> 
            <AddPost></AddPost>
            <Media></Media>
        </div>
    );
};

export default Home;