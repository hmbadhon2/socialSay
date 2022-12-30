import React, { useState } from 'react';
import UserInfoCard from './UserInfoCard';
import UserUpdateCard from './UserUpdateCard';

const About = () => {
    const [userInfo, setUserInfo] = useState(null)
    return (
        <div>
            <div className="card max-w-screen-md mx-auto mt-12 bg-base-100 shadow-xl">

            <div className='absolute right-2 top-2'>
         <label htmlFor="updateUser-modal" className="btn btn-ghost gap-2"> Edit </label>
         </div>
                <div className="card-body mt-5">
                    <div>

                    {
                        <UserUpdateCard
                        setUserInfo = {setUserInfo}
                        ></UserUpdateCard>
                    }

                    </div>
                    <div>
                    {
                        userInfo &&
                         <UserInfoCard
                         userInfo ={userInfo}
                         ></UserInfoCard>
                    }
                    </div>
                    
                    
                
                    
               
                </div>
            </div>
        </div>
    );
};

export default About;