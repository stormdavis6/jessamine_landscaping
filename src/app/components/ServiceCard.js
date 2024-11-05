export default function ServiceCard({ title, description, image }) {
    return (
        <div className="bg-none rounded-lg overflow-hidden lg:p-2 text-white font-figtree transform transition duration-300 hover:scale-105">
            <img
                src={image}
                alt={title}
                className="w-full h-24 sm:h-36 md:h-48 lg:h-64 object-contain"
            />
            <div className="p-4">
                <h3 className="text-sm lg:text-xl xl:text-2xl font-bold mb-2 text-start">{title}</h3>
                <p className="text-xs lg:text-lg xl:text-xl text-white font-normal text-start">{description}</p>
            </div>
        </div>
    );
}