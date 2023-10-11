import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const AdminPage = () => {

    const {babysitterId} = useParams()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) =>  {
        event.preventDefault()
        if (username && password) {
            <Navigate to={`/babysitters/${babysitterId}/update`} />
        } else {
            alert('please enter a valid username or password')
        }
    }

        return (
            <div className="otherContainer">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link to={`/babysitters/${babysitterId}/update`}>
              <button type="submit" className="btnNav">
                Login
              </button>
              </Link>
            </form>
          </div>
        )
    }
 
export default AdminPage;