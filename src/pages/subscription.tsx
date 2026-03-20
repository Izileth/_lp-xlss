import { useNavigate } from "react-router";

function PageSubscription() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }
    return (
        <div className="flex flex-col gap-2 bg-zinc-950 items-center justify-center h-screen">
            <h1 className="text-3xl text-zinc-50 font-bold">Subscription</h1>
            <button onClick={handleNavigate} className="ml-4 px-4 py-2 bg-zinc-800 text-white rounded">
                Go to Home
            </button>

        </div>
)        
}

export default PageSubscription;
