export function Navbar() {
    return (
        <nav className="bg-darkBlue text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal" target={"_blank"}>
                    <div className="text-lg font-semibold">My Portfolio</div>
                </a>
                <div className="space-x-8">
                    <a href="#home" className="hover:text-lightBlue">Home</a>
                    <a href="#about" className="hover:text-lightBlue">About</a>
                    <a href="#skills" className="hover:text-lightBlue">Skills</a>
                    <a href="#certificates" className="hover:text-lightBlue">Certificates</a>
                    <a href="#projects" className="hover:text-lightBlue">Projects</a>
                    <a href="#services" className="hover:text-lightBlue">Services</a>
                    <a href="#pricing" className="hover:text-lightBlue">Pricing</a>
                    <a href="#contacts" className="hover:text-lightBlue">Contacts</a>
                </div>
            </div>
        </nav>
    );
}