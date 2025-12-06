import { useNavigate } from "react-router-dom"

function Dashboard() {
    const navigation = useNavigate()

    return (
        <div>
            <h1 className="font-semibold">Dashboard</h1>
            <br />
            <button onClick={() => navigation('/')}>Logout</button>
        </div>
    )
}

export default Dashboard