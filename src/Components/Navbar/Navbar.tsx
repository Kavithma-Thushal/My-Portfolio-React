export function Navbar() {
    return (
        <nav className="bg-darkBlue text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target={"_blank"}>
                    <div className="text-lg font-semibold">PORTFO<span className={"text-neonBlue"}>LIO</span></div>
                </a>
                <div className="space-x-8">
                    <a href="#home" className="hover:text-neonBlue transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-neonBlue transition-colors duration-300">About</a>
                    <a href="#skills" className="hover:text-neonBlue transition-colors duration-300">Skills</a>
                    <a href="#projects" className="hover:text-neonBlue transition-colors duration-300">Projects</a>
                    <a href="#services" className="hover:text-neonBlue transition-colors duration-300">Services</a>
                    <a href="#contacts" className="hover:text-neonBlue transition-colors duration-300">Contacts</a>
                </div>
            </div>
        </nav>
    );
}