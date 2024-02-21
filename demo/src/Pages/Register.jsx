import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Regesiter() {

  const navigate = useNavigate('')
  let Url = `http://localhost:8000/users`
  const [name, setName] = useState('');
  const [UserName, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${Url}`, {
        name: name,
        UserName: UserName,
        email: email,
        phone: phone,
        Password: Password,
        ConfirmPassword: ConfirmPassword,
        roal: 'user'
      });
      alert('Record id Add')
      setName('')
      setUsername('')
      setEmail('')
      setPhone('')
      setPassword('')
      setConfirmPassword('')
      navigate('/')

      console.log(data);

    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return (
    <>
      <Header />
      <div className="registerform">
        <div className="container">
          <div className="title">Registration Page</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="user__details">
              <div className="input__box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="E.g: John Smith" required onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="input__box">
                <span className="details">Username</span>
                <input type="text" placeholder="johnWC98" required onChange={(e) => setUsername(e.target.value)} value={UserName} />
              </div>
              <div className="input__box">
                <span className="details">Email</span>
                <input type="email" placeholder="johnsmith@hotmail.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="input__box">
                <span className="details">Phone Number</span>
                <input type="tel" placeholder="012-345-6789" required onChange={(e) => setPhone(e.target.value)} value={[phone]} />
              </div>
              <div className="input__box">
                <span className="details">Password</span>
                <input type="password" placeholder="********" required onChange={(e) => setPassword(e.target.value)} value={Password} />
              </div>
              <div className="input__box">
                <span className="details">Confirm Password</span>
                <input type="password" placeholder="********" required onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} />
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Regesiter