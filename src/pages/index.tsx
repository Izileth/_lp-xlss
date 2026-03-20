import { useNavigate } from "react-router"
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
function Page() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/subscription");
    }
    return (
        <>
        <Header />  
        <div className="flex flex-col gap-2 bg-zinc-50 items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Home</h1>
            <button onClick={handleNavigate} className="ml-4 px-4 py-2 bg-zinc-800 text-white rounded">Go to Subscription</button>
        </div>
        <Footer />
        </>
)        
}

export default Page
