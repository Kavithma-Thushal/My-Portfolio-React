interface CardProps {
    title: string;
    img: string
}

export function Card({title, img}: CardProps) {
    return (
        <div className="text-center m-5 p-5 rounded-lg bg-black border border-[#00c7ff] shadow-2xl w-60">
            <h1 className="text-3xl font-semibold mb-5">{title}</h1>
            <div className={"flex items-center justify-center"}>
                <img className={"w-28 mb-6"} src={img}/>
            </div>
            <button
                className="text-white font-semibold hover:bg-neonBlue hover:text-black px-3 py-1 rounded border border-[#00c7ff] transition duration-300 w-full">Explore
            </button>
        </div>
    );
}