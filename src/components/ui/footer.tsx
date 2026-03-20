import { FOOTER_LINKS } from "../../constants/footer"

export function Footer() {
    return (
        <div className="w-full h-16 bg-zinc-800 gap-1 text-white flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Footer</h1>
            <nav className="ml-4">
                <ul className="flex gap-4">
                    {FOOTER_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-blue-500">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

