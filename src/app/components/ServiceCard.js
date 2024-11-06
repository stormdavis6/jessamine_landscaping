export default function ServiceCard({ description, image }) {
    return (
        <div className="bg-none rounded-lg overflow-hidden lg:p-2 text-white font-figtree transform transition duration-300 hover:scale-105">
            <img
                src={image}
                alt={description}
                className="w-full h-24 sm:h-36 md:h-48 lg:h-64 object-contain"
            />
            <div className="p-4">
                <h1 className="text-sm lg:text-xl xl:text-2xl font-bold mb-2 text-start">{description}</h1>
            </div>
        </div>
    );
}