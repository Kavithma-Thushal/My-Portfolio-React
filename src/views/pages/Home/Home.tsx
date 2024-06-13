import {Card} from "../../components/Card/Card";

export function Home() {
    return (
        <div className="home-container bg-darkBlue text-white flex">
            <Card title="Java"/>
            <Card title="SpringBoot"/>
            <Card title="HTML"/>
            <Card title="CSS"/>
            <Card title="JavaScript"/>
            <Card title="React"/>
        </div>
    );
}