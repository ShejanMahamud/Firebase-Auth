import { useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
        <h1 onClick={handleNavigate} className="text-2xl underline">Please Login</h1>
        </div>
    );
}

export default App;
