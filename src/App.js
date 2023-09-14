import logo from './logo.svg';
import './App.css';

function App() {
  const handalSubmit = (event) => {
    event.preventDefault();
    var {email, password} = document.forms[0];
    console.log(`${email.value}`);
  }
  return (
    <div className='background'>
      <div className='centerDiv'>
        <div className='singin-text'>SING TO YOUR ACCCOUNT</div>
        <form onSubmit={handalSubmit}>
          <input type='text' className='input-text' placeholder='Enter Email' name='email'></input>
          <input type='password' className='input-text' placeholder='Enter Password' name='password'></input>
          <input type='submit' className='sub-btn'></input>
        </form>

      </div>
    </div>
  );
}

export default App;
