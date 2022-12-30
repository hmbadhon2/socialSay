import React from 'react';

const UserInfoFixedCard = () => {
    return (
        <div>
                 <div>
         
         <div className="collapse bg-secondary rounded-md">

<input type="checkbox" />

  <div className="collapse-title text-xl font-medium">
   Your Name
  </div>

  <div className="collapse-content"> 
      <p> HM Mizanur Rahman Badhon</p>
  </div>
         </div>  
         <div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

  <div className="collapse-title text-xl font-medium">
   email
  </div>

  <div className="collapse-content"> 
      <p> hmmizanurrahmanbadhon@gamil.com </p>
  </div>
         </div>  
<div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

  <div className="collapse-title text-xl font-medium">
   Your School/College/University
  </div>

  <div className="collapse-content"> 
      <p>Kushtia Polytechnic Institute </p>
  </div>
</div>  
<div className="collapse bg-secondary mt-4 rounded-md">

<input type="checkbox" />

  <div className="collapse-title text-xl font-medium">
   Address
  </div>

  <div className="collapse-content"> 
      <p> Dhaka Bangladesh</p>
  </div>
</div>    
       </div>
        </div>
    );
};

export default UserInfoFixedCard;