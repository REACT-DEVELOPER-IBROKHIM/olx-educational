import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { instance } from '../../../api/instance';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    avatar: ""
  })
  const createUser = (e) => {
    e.preventDefault();
    instance.post("/users", userData)
      .then(response => {
        if(response.data.email){
          dispatch({email: response.data.email, type: "CREATE_USER"})
          navigate("/")
        }
      })
      .catch(err => console.log(err))
  }
  console.log(userData)

  const createUserWithGoogle = () => {
    
  }
  return (
    <div>
    <form onSubmit={createUser}>
      <input type="text" placeholder='Your name' onChange={e => {setUserData({...userData, name: e.target.value})}}/>
      <input type="email" onChange={e => {setUserData({...userData, email: e.target.value})}} required placeholder='Your email'/>
      <input type="password" onChange={e => {setUserData({...userData, password: e.target.value})}} required placeholder='Your password' minLength={8}/>
      <input type="url" onChange={e => {setUserData({...userData, avatar: e.target.value})}} required placeholder='Your avatar'/>
      <button type='submit'>Create account</button>
    </form>
    <button onClick={createUserWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Create