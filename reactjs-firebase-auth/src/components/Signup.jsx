import { useNavigate } from "react-router-dom"

function Signup() {
    const navigation = useNavigate()

    return (
        <div>
            <h1 className="font-semibold">Signup</h1>
            <br />
            <label htmlFor="email">
                <span className="font-semibold">Email:</span>
                <input type="email" name="email" id="email"
                className="border ml-2" />
            </label>
            <br />
            <br />
            <label htmlFor="password">
                <span className="font-semibold">Password:</span>
                <input type="password" name="password" id="password"
                className="border ml-2" />
            </label>
            <br />
            <br />
            <button onClick={() => navigation('/')}>Home</button>
        </div>
    )
}

export default Signup