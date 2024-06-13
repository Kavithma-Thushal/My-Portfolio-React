import {Navbar} from "./views/components/Navbar/Navbar";
import {Content} from "./views/components/Content/Content";
import {Footer} from "./views/components/Footer/Footer";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}