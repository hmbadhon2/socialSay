import React from 'react';
import AddPost from './AddPost/AddPost';
import PostCard from './PostCard/PostCard';

const Home = () => {
    return (
        <div>
           <PostCard></PostCard> 
          <AddPost></AddPost>
        </div>
    );
};

export default Home;