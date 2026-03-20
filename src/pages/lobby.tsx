import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";

function Lobby() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-2 bg-zinc-950 items-center justify-center h-screen">
                <h1 className="text-3xl text-zinc-50 font-bold">Lobby</h1>
            </div>
            <Footer />
        </>
    );
}

export default Lobby