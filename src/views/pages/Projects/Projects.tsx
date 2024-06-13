import {Card} from "../../components/Card/Card";

export function Projects() {
    return (
        <div className="bg-darkBlue text-white p-10">
            <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-5">
                <Card title="Java"/>
                <Card title="JavaFX"/>
                <Card title="Spring"/>
                <Card title="SpringBoot"/>
                <Card title="HTML"/>
                <Card title="CSS"/>
                <Card title="JavaScript"/>
                <Card title="React"/>
            </div>
        </div>
    );
}