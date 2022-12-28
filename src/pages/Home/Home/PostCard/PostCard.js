import React from 'react';
import { Link } from 'react-router-dom';
import { HiVideoCamera } from "react-icons/hi2";

const PostCard = () => {
    return (
        <div className="card my-10 bg-base-100 mx-auto max-w-screen-md	 shadow-xl">
        <div className="card-body">
        <div className='flex gap-5'>

        <div className="avatar">
         <div className="w-12 rounded-full">
             <img src="https://placeimg.com/192/192/people" alt='profile pic' />
         </div>
        </div>
        <div>
         <label htmlFor="post-modal" className="btn btn-ghost gap-2">  What's Your Mind ?</label>
         </div>
        </div>

        <div className='divider'></div>

        <div className='flex gap-5 justify-around'>
        <div className='flex gap-5'>
        <div>
         <label htmlFor="post-modal" className="btn btn-ghost gap-2"><HiVideoCamera/>  Live Video</label>
         </div>
        </div>
       
        <div>
        <label htmlFor="post-modal" className="btn btn-ghost">Photo</label>
         </div>

        <div>
        <label htmlFor="post-modal" className="btn btn-ghost">Video</label>
         </div>
        </div>
            
        </div>
        </div>
    );
};

export default PostCard;