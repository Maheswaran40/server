import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var navigate = useNavigate();
  var url="http://localhost:5000/api"
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${url}/login`, {
        userEmail: email,
        userPassword: password,
        
      },
      {withCredentials:true}
    
    );
      console.log(res.data.user.name)

      alert(res.data.message);
      navigate("/home");
    } catch (err) {
      alert("not login", err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
