import { useNavigate } from "react-router-dom"

function Home() {
    const navigation = useNavigate()
    
    return (
        <div>

            <div className="flex flex-row items-center">
                <div className="">
                    <img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png" alt="" />
                </div>
                <div>
                    <h1 className="font-semibold">Firbase</h1>
                    <p className="text-xl">Auth Application</p>
                </div>
            </div>
            <br />
            <div className="space-x-2">
                <button onClick={() => navigation('/signin')}>Login</button>
                <button onClick={() => navigation('/signup')}>Register</button>
            </div>

        </div>
    )
}

export default Home