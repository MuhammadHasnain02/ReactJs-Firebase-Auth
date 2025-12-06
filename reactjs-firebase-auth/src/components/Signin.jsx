import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Signin() {
    const navigation = useNavigate()
    const [email , setEmail]       = useState('');
    const [password , setPassword] = useState('');
    const { login } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email && !password || !email || !password) {
            return alert('Something Went Wrong')
            // return alert('Please fill all field')
        }

        try {
            await login(email , password)
            navigation('/dashboard');
        } catch (error) {
            console.log('Failed to create account: ' + error.message);
        }
        
    }

    return (
        <div>

            <div>
                <h1 className="font-bold">Signin</h1>
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

                <button type="submit">
                    Log in
                </button>

            </form>
            <div>
                <br />
                <p className="auth-link">
                    Don't have an account? <Link to="/signup"><span className="underline">Sign up</span></Link>
                </p>
            </div>

        </div>
    )
}

export default Signin