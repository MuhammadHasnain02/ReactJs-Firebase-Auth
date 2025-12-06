import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const navigation = useNavigate()
    const { logout } = useAuth()

    async function handleLogout() {

        try {
            await logout()
            navigation('/');
        } catch (error) {
            console.log('Error logging out: ' + error.message);
        }

    }

    return (
        <div>
            <div>
                <h1 className="font-semibold">Dashboard</h1>
                <br />
            </div>
            {/* <div>
                <p className="text-md">Users</p>
            </div> */}
            <div>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard