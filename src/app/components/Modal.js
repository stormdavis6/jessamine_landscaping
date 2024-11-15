export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-6 bg-[#191919] p-6 rounded-3xl shadow-lg relative max-w-4xl w-full">
                <button
                    className="absolute top-1 right-3 text-white text-xl lg:text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
