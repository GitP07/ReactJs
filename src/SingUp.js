import './singUp.css'

function SingUp() {

    const handalSingUp = (event) => {

        event.preventDefault();
        var {fasName, lasName, email, pwd} = document.forms[1];
        console.log(`first name: ${fasName.value} Last name: ${lasName.value} Email: ${email.value} Password: ${pwd.value}`);
    }

    return(
        <div className="Fbackground">
            <div className="form-div">
                <div className="singup-text">SING UP</div>
                <form onSubmit={handalSingUp}>
                    <input type="text" className="input-text" placeholder="Enter First Name" name="fasName"></input>
                    <input type="text" className="input-text" placeholder="Enter Last Name" name="lasName"></input>
                    <input type="email" className="input-text" placeholder="Enter Email" name="email"></input>
                    <input type="password" className="input-text" placeholder="Enter Password" name="pwd"></input>
                    <button type="submit" className="sub-btn">Sing Up</button>
                </form>
                <p>Already a member?<a href="#">Login Here</a></p>
            </div>
        </div>          
    );
    
}
export default SingUp;