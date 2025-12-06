import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigation = useNavigate()

    const [email , setEmail]       = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassw , setConfirmPassw] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassw) {
            return setError('Passwords do not match');
        }
        
    }

    return (
        <div>
            <h1 className="font-semibold">Signup</h1>
            <br />
            <label htmlFor="email">
                
                <span className="font-semibold">Email:</span>
                <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}
                id="email" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                
            </label>
            <br />
            <br />
            <label htmlFor="password">
                
                <span className="font-semibold">Password:</span>
                <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
                id="password" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                
            </label>
            <br />
            <br />
            <label htmlFor="reEnterpassword">

                <span className="font-semibold">Confirm Password:</span>
                <input type="password" name="reEnterpassword" placeholder="Re-Enter Password" value={confirmPassw} onChange={(e) => setConfirmPassw(e.target.value)}
                id="reEnterpassword" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                
            </label>
            <br />
            <br />
            <button onClick={() => navigation('/')}>Home</button>
        </div>
    )
}

export default Signup