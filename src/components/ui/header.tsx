import { NAV_LINKS } from "../../constants/navigation"

export function Header() {
    return (
        <div className="w-full h-16 bg-zinc-800 text-white flex items-center justify-center">
            <div className="w-full px-10 flex items-center justify-between">
                <h1 className="text-xl font-bold">Header</h1>
                <nav className="ml-4">
                    <ul className="flex gap-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-blue-500">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}