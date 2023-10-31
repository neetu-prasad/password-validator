import React, { useCallback } from 'react';
import './styles/PasswordForm.css';

const PasswordForm = () => {
    const myFunction = () => {
        alert("hello");
    }

    return (
        <>
            <div className="container" onClick={myFunction}>
                <form action="/action_page.php">
                    <label for="usrname">Username</label>
                    <input type="text" id="usrname" name="usrname" required />
                    <label for="psw">Password</label>
                    <input type="password" id="psw" name="psw" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                <p id="number" className="invalid">A <b>number</b></p>
                <p id="length" className="invalid">Minimum <b>8 characters</b></p>
            </div>
        </>
    );
}

export default PasswordForm;