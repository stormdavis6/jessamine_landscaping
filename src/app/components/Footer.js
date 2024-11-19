export default function Footer() {

    return (
        <footer className="bg-[#191919] text-gray-400 py-6 px-4 text-center">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-2">
                <p className="font-figtree text-base md:text-lg">&copy; {new Date().getFullYear()} Jessamine Landscaping
                    Services. All rights reserved.</p>
                <p className="font-figtree text-sm md:text-base">
                    Proudly serving our community with premium landscaping solutions.
                </p>
            </div>
        </footer>
    );
}
