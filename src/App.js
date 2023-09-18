import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handalSubmit = (event) => {
    event.preventDefault();
    const email = "myemail@gmail.com";
    const pass = "1234";
    var {userEmail, password} = document.forms[0];
    if((userEmail.value == email) && (password.value == pass)){
      console.log("Login Sucessful");
      navigate("/booksList");
    }
    else{
      console.log("Login Fail");
    }
  }
  return (
    <div className='background'>
      <div className='centerDiv'>
        <div className='singin-text'>SING TO YOUR ACCCOUNT</div>
        <form onSubmit={handalSubmit}>
          <input type='text' className='input-text' placeholder='Enter Email' name='userEmail'></input>
          <input type='password' className='input-text' placeholder='Enter Password' name='password'></input>
          <input type='submit' className='sub-btn'></input>
        </form>

      </div>
    </div>
  );
}

export default App;
