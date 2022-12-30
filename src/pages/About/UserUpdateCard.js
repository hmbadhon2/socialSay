import React,{ useContext } from 'react';
import { useForm } from 'react-hook-form';


const UserUpdateCard = ({setUserInfo}) => {
    const { register, handleSubmit } = useForm();
   
    const handleUpdateUser = data =>{
        
            const updateUser = {
                name:data.name,
                email:data.email,
                education:data.education,
                address:data.address
                
            }
            
            fetch('http://localhost:5000/usersInfo',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateUser)
                }) 
                .then(res => res.json())
                .then(res =>{
                    console.log(res)
                    setUserInfo(res)
                    
                })
                

        
    }
    return (
        <div>
<input type="checkbox" id="updateUser-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <div className='grid justify-center'>
    <label htmlFor="updateUser-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">Update Your Information</h3>
    </div>
    
    <div className='divider'></div>
    <form onSubmit={handleSubmit(handleUpdateUser)}>
    
 <div>
    {/* collapse Items -1 */}
    <div className="collapse bg-secondary mt-4 rounded-md">
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
            Your Name
        </div>

        <div className="collapse-content"> 
            <input
            type = 'name'
            name="name"
            {...register("name")}
            className="w-full"
            placeholder="Enter Your Name"
                />
        </div>
   </div> 
    {/* collapse Items -2 */}
    <div className="collapse bg-secondary mt-4 rounded-md">
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
            Email
        </div>

        <div className="collapse-content"> 
            <input
            type ='email'
            name="email"
            {...register("email")}
            className="w-full"
            placeholder="Enter Your Email"
                />
        </div>
   </div> 
              
    {/* collapse Items -3 */}
    <div className="collapse bg-secondary mt-4 rounded-md">
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
            School/College/University
        </div>

        <div className="collapse-content"> 
            <input
            type ='text'
            name="education"
            {...register("education")}
            className="w-full"
            placeholder="Enter Your School/College/University "
            />
        </div>
   </div> 
    {/* collapse Items -4 */}
    <div className="collapse bg-secondary mt-4 rounded-md">
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
            Address
        </div>

        <div className="collapse-content"> 
            <input
            type ='text'
            name="address"
            {...register("address")}
            className="w-full"
            placeholder="Enter Your Address"
           />
        </div>
   </div> 
              
              
 </div>   
    <input  type="submit" value="Update" className='w-full mt-5 btn btn-accent' />      

    </form>
   
  </div>
</div>
        
        </div>
    );
};

export default UserUpdateCard;