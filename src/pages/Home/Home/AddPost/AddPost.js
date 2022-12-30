import React from 'react';
import { useForm } from 'react-hook-form';

const AddPost = () => {
    const { register, handleSubmit } = useForm();
    
    const handlePost = data =>{
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=cc59a0eeceea44c926739c7715e377c5`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(photoData =>{
            console.log(photoData.data.url)
            const post = {
                postText:data.postText,
                image:photoData.data.url
            }
             console.log(post)
            fetch('https://social-say-server.vercel.app/post',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(post)
                }) 
                .then(res => res.json())
                .then(res =>{
                    console.log(res)
                })
                

        })
    }
    return (
        <div>
<input type="checkbox" id="post-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <div className='grid justify-center'>
    <label htmlFor="post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">Create Post</h3>
    </div>
    
    <div className='divider'></div>
    <form onSubmit={handleSubmit(handlePost)}>
    <textarea 
    type = 'text'
    name="postText"
    // id="postText"
     {...register("postText",{
        required:'Photo is required'
      })}
    className="textarea textarea-ghost w-full" placeholder="What's Your mind ?"></textarea> 
        <div>

              
              <input
                {...register("image",{
                  
                })}
                type='file'
                id='image'
                accept='image/*'
                className='input input-bordered w-full p-10 mt-5 '
              />
            </div>   
            <input type="submit" value="Post" className='w-full mt-5 btn btn-accent' />      

    </form>
   
  </div>
</div>
        
        </div>
    );
};

export default AddPost;