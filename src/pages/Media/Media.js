import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { HiChatBubbleLeftRight,HiHandThumbUp,HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";


const Media = () => {
  const [like,setLike] = useState(null)
  const [comment,setComment] = useState(null);
    const {data:posts=[],refetch} = useQuery({
        queryKey:['posts'],
        queryFn:()=> fetch('https://social-say-server.vercel.app/post')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            
            return data;
        })

        
    })

    

    return (
        <div className='max-w-screen-md mx-auto'>
            {
                posts.map(post =><div
                key={post._id}
                 className="card mt-12  bg-base-100 shadow-xl">
                
                    <figure><img src={post.image} alt="post-pic" /></figure>
                    
                
                <div className="card-body">
                 
                  <p>{post.postText}</p>
                  <div className='divider'></div>
                  <div className="card-actions flex gap-5 justify-around">
                  <div>
                <label onClick={()=>setLike(like+1)} className="btn btn-ghost gap-2"><HiHandThumbUp/>Like {like}</label>
                </div>

                  <div>
                <label  onClick={()=>setComment()} className="btn btn-ghost gap-2"><HiChatBubbleLeftRight/>  Comment</label>
                </div>

                  <div>
                <label  className="btn btn-ghost gap-2"><HiOutlineArrowTopRightOnSquare/>  Share</label>
                </div>
                   
                  </div>
                </div>
              </div>)
            }
           
        </div>
    );
};

export default Media;