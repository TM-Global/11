import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContxt } from '../../../contextApi/AuthContext';
import toast from 'react-hot-toast';
import useTitleHooks from '../../../Hooks/useTitleHooks';

const Login = () => {
 useTitleHooks('Login')
  const {login,  setUser,googleSignin,}= useContext(myContxt)
  const naviget = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const handleGoogle = () =>{
    googleSignin()
    .then(result => {
      const user = result.user
      setUser(user)
           // JWS TOKEN

           const currentUser = {
            email : user.email 
        }
        fetch(`https://assignment-server-mauve.vercel.app/jwt`,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('myReviewToken', data.token)
        })
      naviget(from, {replace:true})
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    // emplement login 
    login(email,password)
    .then(result => {
      const user = result.user
      console.log(user)
      setUser(user)
      toast.success('Successfully Login!')

      // JWS TOKEN

      const currentUser = {
        email : user.email 
    }
    fetch(`https://assignment-server-mauve.vercel.app/jwt`,{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('myReviewToken', data.token)
    })

      naviget(from, {replace:true})
    })
    .catch(err => {
      toast.error(`${err.message}`)
    })

  }

    return (
    <div className='md:w-3/12 sm:w-10/12 w-10/12 lg:w-3/12  mt-9 m-auto'>
      <div className="card flex-shrink-0 shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <h2 className='text-2xl text-center'>Login Now</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to = '/signin' href="#" className="label-text-alt link link-hover">New To This Site ? Sign In Now  </Link>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
        </div>
        <div onClick={handleGoogle} className="form-control btn mt-0 text-center">
           Login WIth Google 
        </div>
      </form>
    </div>
    </div>

    );
};

export default Login;