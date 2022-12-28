import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../Context/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [signError, setSignError] = useState('');
    const { createUser, googleUser, updateUser} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleSignUp = data =>{
        setSignError('')

        console.log(data.email, data.password)

        createUser(data.email, data.password)
        .then(res =>{
            const user = res.user
            const userInfo = {
              displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
              saveUser(data.name, data.email);
              navigate(from, {replace:true})
            })

        })
        .catch(err =>{
            console.log(err)
            setSignError(err)
        })

        
        

    }

    const handleGoogleSignIn = () =>{
          googleUser(googleProvider)
          .then(res =>{
            const user = res.user
            console.log(user)
          })
          .catch(err =>{
            console.log(err)
            setSignError(err)
          })
    }

    const saveUser =(name, email)=>{
      const user = {name,email}
      fetch('url',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)

      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
      .catch(err => console.log(err))

    }

    return (
        <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gr
      ay-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Signup</h1>
          <p className='text-sm text-gray-400'>Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit(handleSignUp)}
       
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
               
                {...register ("name",{
                    required:"Name is required"
                   })}
              
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
           
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                 {...register ("email",{
                    required:"email is required"
                   })}
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Password
                </label>
              </div>
              <input
                 {...register ("password",{
                    required:"at least 6 character"
                   })}
                type='password'
                name='password'
                id='password'
                
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900'
              />
               {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            
          </div>
          <div className='space-y-2'>
            <div>
              <PrimaryButton
                type='submit'
                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Sign up
              </PrimaryButton>
            </div>
            {
                    signError &&
                    <p className='text-red-600'> {signError.message} </p>
                    
                }

          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button onClick={handleGoogleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
            </svg>
          </button>
          
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account yet?{' '}
          <Link to='/login' className='hover:underline text-gray-600'>
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default SignUp;