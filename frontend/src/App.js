import { useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import EventList from "./components/EventList";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Ubuntu, sans-serif;

  h1 {
    margin-top: 10px  ;
    margin-bottom: 0px;
    text-align: center;
  }

  p {
    margin-top: 0px;
    color: #4285f4;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 40%;
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #357ae8;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    a {
      color: #333;
      margin: 0 16px;
      font-size: 24px;

      &:hover {
        color: #4285f4;
      }
    }
  }

  footer {
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
`;

function App() {
  const [events, setEvents] = useState([]);

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => {
      const { code } = response;
      try {
        const { data } = await axios.post("https://calenderapp-navneetbahuguna007.b4a.run:4000/api/create-tokens", { code });
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    },
    onFailure: (error) => console.error(error),
  });

  const handleLogout = () => {
    googleLogout();
    setEvents([]);
  };

  return (
    <StyledApp>
      <h1>Backend Assignment</h1>
      <p>Sign in to check list of events from your google calendar</p>
      <div className='btns'>
        <button onClick={() => googleLogin()}>SIGN IN 🚀</button>
        <button onClick={handleLogout}>LOGOUT 👋</button>
      </div>
      {events.length > 0 && <EventList events={events} />}
      <div className="social-icons">
        <a
          href="https://github.com/code2me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cypherzz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <footer>by Navneet Bahuguna</footer>
    </StyledApp>
  );
}

export default App;
