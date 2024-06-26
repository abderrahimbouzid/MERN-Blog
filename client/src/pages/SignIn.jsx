import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { signInStart,signInSucess,signInFailure } from '../redux/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Oauth from '../components/Oauth';


export default function SignIn() {
  const [formdata,setFormdata] = useState({});
  const {loading,error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handleChange = (e)=>{
    setFormdata({...formdata,[e.target.id]: e.target.value.trim()})
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!formdata.email || !formdata.password){
         return dispatch(signInFailure("plase fill all the fields"))
    }

    try {
      dispatch(signInStart());
    const res = await fetch('/api/auth/signin',
    {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formdata)
    });

    
   
    const data = await res.json();
    
    if(data.Success === false){
     
      return dispatch(signInFailure(data.message))
    }
    
    if(res.ok){
      dispatch(signInSucess(data));
      navegate('/');
    }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
    // console.log(formdata)
       
  }
  
  console.log(formdata)
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 gap-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center '>

    

{/*left side*/}
<div className='flex-1'>
    <Link to='/' className='font-bold dark:text-white text-4xl'>

    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-300 rounded-lg text-white '>Developr0101's</span>
Blog
</Link>
<p className='text-sm mt-4 '>
  This is developer0101 Article website
   Here you can learn anything you want from scratch 
   you can Sign in using you email and password
</p>
    </div>
     

     {/*Right side*/}
    <div className='flex-1'>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        
        <div>
       <Label value='Your Email'/>
       <TextInput type='email' placeholder='name@gmail.com' id="email"  onChange={handleChange}/>
       </div>
        <div>
       <Label value='Your Password' />
       <TextInput type='password' placeholder='Password' id="password" onChange={handleChange}/>
       </div>
       <Button className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-300 rounded-lg text-white' type='submit' disabled={loading}>
        {
          loading ? (
                <>
                <Spinner className='sm'/>
                <span className='pl-3'>isLoading...</span>
                </>

          ) : ( 
            'Sign In'
          )}
        </Button>
        <Oauth/>
      </form>
      <div className='flex gap-2 text-sm mt-3'>
        <span>Don't have an Account?</span>
        <Link to="/signup" className='text-blue-500'>Sign Up</Link>
      </div>
      {
        errorMessage && (
        <Alert className='mt-5' color='failure'>
          {errorMessage}
        </Alert>
        )
        
      }
    </div>
    </div>
    </div>
  )
}
