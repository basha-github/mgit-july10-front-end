import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const myNav = useNavigate();

    const handleSubmitt = (x:FormEvent)=>{
        x.preventDefault();
        console.log("submitt pressed...");
        console.log("username--->"+name);
        console.log('password--->'+password);

        myNav("/myrevanthHome");
    };
  return (
    <div>
 <h3 className="text-center text-black pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form onSubmit={handleSubmitt}>
                <h3 className="text-center text-info">Login</h3>

                <div className="form-group">
                  <label className="text-info">Username:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info"></label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
