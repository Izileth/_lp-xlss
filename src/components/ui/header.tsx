import { useState } from "react"
import { NAV_LINKS } from "../../constants/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full h-16 bg-zinc-800 text-white flex items-center justify-center">
            <div className="w-full px-6 md:px-10 flex items-center justify-between">

                <h1 className="text-xl font-bold">Header</h1>

                {/* MENU DESKTOP */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-blue-500">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* BOTÃO MOBILE */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* OVERLAY */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside className={`
                fixed top-0 right-0 h-full w-full bg-zinc-900 z-50
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <div className="flex justify-between items-center p-6 border-b border-zinc-700">
                    <h2 className="text-lg font-bold">Header</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <nav className="p-6">
                    <ul className="flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href}
                                    className="text-lg hover:text-blue-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

        </header>
    )
}