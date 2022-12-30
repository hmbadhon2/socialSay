import { useQuery } from '@tanstack/react-query';
import React from 'react';


const UserInfoCard = ({userInfo}) => {
   const {_id} = userInfo;

  
    const {data:users =[]} =useQuery({
     
        queryKey:['users'],
        queryFn:()=>fetch(`http://localhost:5000/usersInfo/${_id}`)
        .then(res => res.json())
        .then(data => {
         
            return data;
        })
    })
    return (
        <div>
         
          <div className="collapse bg-secondary rounded-md">

<input type="checkbox" />

   <div className="collapse-title text-xl font-medium">
    Your Name
   </div>

   <div className="collapse-content"> 
       <p> {users.name}</p>
   </div>
          </div>  
          <div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

   <div className="collapse-title text-xl font-medium">
    email
   </div>

   <div className="collapse-content"> 
       <p> {users.email}</p>
   </div>
          </div>  
<div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

   <div className="collapse-title text-xl font-medium">
    Your School/College/University
   </div>

   <div className="collapse-content"> 
       <p> {users.education} </p>
   </div>
</div>  
<div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

   <div className="collapse-title text-xl font-medium">
    Address
   </div>

   <div className="collapse-content"> 
       <p> {users.address}</p>
   </div>
</div>    
        </div>
    );
};

export default UserInfoCard;