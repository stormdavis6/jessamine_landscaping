export default function ServiceCard({ description, image }) {
    return (
        <div className="bg-none rounded-b-3xl overflow-hidden lg:p-4 text-white font-figtree transform transition duration-300 hover:scale-105">
            <img
                src={image}
                alt={description}
                className="w-full h-24 sm:h-36 md:h-48 lg:h-64 object-contain"
            />
            <div className="mt-2">
                <h1 className="text-sm lg:text-xl xl:text-2xl font-bold mb-2 text-center text-[rgb(252,194,0)]">{description}</h1>
            </div>
        </div>
    );
}