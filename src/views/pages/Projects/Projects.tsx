import {Card} from "../../components/Card/Card";
import java from "../../../assets/images/projects/languages/java.png";
import javafx from "../../../assets/images/projects/languages/javafx.png";
import spring from "../../../assets/images/projects/languages/spring.png";
import springboot from "../../../assets/images/projects/languages/spring.png";
import html from "../../../assets/images/projects/languages/html.png";
import css from "../../../assets/images/projects/languages/css.png";
import js from "../../../assets/images/projects/languages/js.png";
import react from "../../../assets/images/projects/languages/react.png";

export function Projects() {
    return (
        <div className="bg-darkBlue text-white p-10">
            <h1 className="text-4xl font-bold mb-10 mt-[80px] text-center">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-5">
                <Card title="Java" img={java}/>
                <Card title="JavaFX" img={javafx}/>
                <Card title="Spring" img={spring}/>
                <Card title="SpringBoot" img={springboot}/>
                <Card title="HTML" img={html}/>
                <Card title="CSS" img={css}/>
                <Card title="JS" img={js}/>
                <Card title="React" img={react}/>
            </div>
        </div>
    );
}