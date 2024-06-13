interface CardProps {
    title: string;
}

export function Card({title}: CardProps) {
    return (
        <div className="text-center p-5 m-2 rounded-lg bg-black border border-blue-300 shadow-2xl w-60 m-5">
            <h1 className="text-3xl font-semibold mb-5">{title}</h1>
            <button className="text-black font-semibold bg-neonBlue p-2 rounded">Explore</button>
        </div>
    );
}