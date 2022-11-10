import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContxt } from '../../../contextApi/AuthContext';
import toast from 'react-hot-toast';
import useTitleHooks from '../../../Hooks/useTitleHooks';

const Signin = () => {
  useTitleHooks('SignUp')
  const {SignIn,getProfile,setUser} = useContext(myContxt)
  const neviget = useNavigate()
  const handleSingin = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const photoURL = form.photoURL.value
    const password = form.password.value
    console.log(name,email,photoURL,password)
    SignIn(email,password)
    .then(result => {
      const user = result.user
      setUser(user)
      updateProfile(name,photoURL)
      console.log(user);
      form.reset()
      toast.success('Successfully SingIn!')
      neviget('/')
    })
    .catch(err => {
      if(err.message){
        toast.error('Something is Wrong!')
      }
     
    } )


    const updateProfile = (name,photoURL) =>{
      const profile = {
        displayName : name,
        photoURL : photoURL
    }
    getProfile(profile)

    }
  }


    return (
        <div className='md:w-3/12 sm:w-10/12 w-10/12 lg:w-3/12 mt-9 m-auto'>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
        <form onSubmit={handleSingin} className="card-body">
          <h2 className='text-2xl text-center'>SignUp Now</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name'  placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email'  placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photoURL</span>
            </label>
            <input type="text" name='photoURL'  placeholder="Pest photoURL" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
              <Link to = '/Login' href="#" className="label-text-alt link link-hover">Already have an Account ? Login Now . </Link>
              
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
      </div>
    );
};

export default Signin;