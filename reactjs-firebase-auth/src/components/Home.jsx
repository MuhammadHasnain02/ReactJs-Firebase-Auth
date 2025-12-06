import { useNavigate } from "react-router-dom"

function Home() {
    const navigation = useNavigate()
    
    return (
        <div>
            <h1 className="font-semibold">Firbase-Auth</h1>
            <br />
            <button onClick={() => navigation('/signin')}>Login</button>
            <button onClick={() => navigation('/signup')}>Register</button>
        </div>
    )
}

export default Home