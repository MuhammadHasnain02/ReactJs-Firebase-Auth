import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Signup() {
    const navigation = useNavigate()

    const [email , setEmail]       = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassw , setConfirmPassw] = useState('');
    const { signup } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassw) {
            return alert('Passwords do not match')
        }

        try {
            await signup(email , password)
        } catch (error) {
            console.log('Failed to create account: ' + error.message);
        }
        
    }

    return (
        <div>

            <div>
                <h1 className="font-bold">Signup</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <br />
                {/* Email */}
                <label htmlFor="email">
                    
                    <span className="font-semibold">Email:</span>
                    <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    id="email" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                    
                </label>
                <br />
                <br />

                {/* Password */}
                <label htmlFor="password">
                    
                    <span className="font-semibold">Password:</span>
                    <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    id="password" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                    
                </label>
                <br />
                <br />

                {/* Re-Enter Password */}
                <label htmlFor="reEnterpassword">

                    <span className="font-semibold">Confirm Password:</span>
                    <input type="password" name="reEnterpassword" placeholder="Re-Enter Password" value={confirmPassw} onChange={(e) => setConfirmPassw(e.target.value)}
                    id="reEnterpassword" className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
                    
                </label>
                <br />
                <br />

                <button type="submit">
                    Sign up
                </button>

            </form>
            <div>
                <br />
                <p className="auth-link">
                    Already have an account? <Link to="/signin"><span className="underline">Log in</span></Link>
                </p>
            </div>

        </div>

    )
}

export default Signup