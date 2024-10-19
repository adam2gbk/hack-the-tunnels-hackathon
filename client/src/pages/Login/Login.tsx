import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

// / "admin@email.com"
// "password"
function Login() {
  const [message, setMessage] = useState<string | null>(null);
  const { login } = useAccountContext();
  
  const [profile, setProfile] = useState({
    username: '',
    password: '',
  });

  const attemptLogin = async () => {
    try {
      const message = await login(profile.username, profile.password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/carleton_logo_black.png" alt="Carleton Logo" />
          <div className="Login__panel__content__message">
            <div>Welcome to the Carleton SSO Federated Portal.</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="_blank" rel="noopener noreferrer">
                MyCarletonOne
              </a>{" "}
              username and password.
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input 
              type="text" 
              value={profile.username} 
              onChange={e => {
                setProfile({
                  ...profile,
                  username: e.target.value,
                });
              }} 
              placeholder="MyCarletonOne username" 
            />
            <input 
              type="password" 
              value={profile.password} 
              onChange={e => {
                setProfile({
                  ...profile,
                  password: e.target.value,
                });
              }} 
              placeholder="Password" 
            />
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox" />
            <label>Keep me signed in</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={attemptLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;