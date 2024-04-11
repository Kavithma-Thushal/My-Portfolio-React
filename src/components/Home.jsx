import Profile from "../assets/images/profile.jpg";

export default function Home() {
    return (
        <div>
            <img src={Profile} alt="Profile" className="profile" />
            <h1 className="txtHome">I'm Kavithma Thushal</h1>
            <h2 className="txtHome">FullStack Engineer</h2>
        </div>
    );
}