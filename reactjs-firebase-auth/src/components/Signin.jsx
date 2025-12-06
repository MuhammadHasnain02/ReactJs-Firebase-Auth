import { useNavigate } from "react-router-dom"

function Signin() {
    const navigation = useNavigate()

    return (
        <div>
            <h1 className="font-semibold">Signin</h1>
            <br />
            <label htmlFor="email">
                <span className="font-semibold">Email:</span>
                <input type="email" name="email" id="email" placeholder="email"
                className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
            </label>
            <br />
            <br />
            <label htmlFor="password">
                <span className="font-semibold">Password:</span>
                <input type="password" name="password" id="password" placeholder="password"
                className="border border-gray-400 ml-2 placeholder:text-sm placeholder:pl-1 rounded-sm" />
            </label>
            <br />
            <br />
            <button onClick={() => navigation('/')}>Home</button>
        </div>
    )
}

export default Signin