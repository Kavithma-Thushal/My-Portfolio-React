interface CardProps {
    title: string;
}

export function Card({title}: CardProps) {
    return (
        <div className="text-center m-5 p-5 rounded-lg bg-black border border-blue-300 shadow-2xl w-60">
            <h1 className="text-3xl font-semibold mb-5">{title}</h1>
            <button className="text-black font-semibold bg-neonBlue px-3 py-1 text-sm rounded">Explore</button>
        </div>
    );
}