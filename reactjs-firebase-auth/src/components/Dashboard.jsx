import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
    const navigation = useNavigate()
    const { currentUser } = useAuth()
    const [users, setUsers] = useState([]);
    const { logout } = useAuth()

    useEffect(() => {

        const getData = async () => {

            const res = await getDocs(collection(db, "data"));
            console.log(res);
            const dataArr = res.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            setUsers(dataArr);

        }
        getData();

    } , [])

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
                <p className="font-bold text-[40px]">Dashboard</p>
                <p className="font-semibold text-[16px]">( {currentUser.email} )</p>
            </div>
            <br />
            <div>
                <h2 className="text-xl font-bold mb-4">User Details</h2>
                {users.map((usr , i) => (
                    <div key={usr.id} className="mb-3 p-3 border rounded">
                        <p><strong>User:</strong> {i + 1}</p>
                        <p><strong>Name:</strong> {usr.name}</p>
                        <p><strong>Age:</strong> {usr.age}</p>
                    </div>
                ))}

            </div>
            <br />
            <div>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard