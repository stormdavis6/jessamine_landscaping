import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function ReviewsSection() {
    const featurableWidgetId = "433869fe-327e-4aad-8253-822e059d3dfe";
    const googleReviewsUrl = "https://www.google.com/search?q=jessamine+landscaping&rlz=1C1GCEU_enUS902US902&oq=jess&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MggIAhBFGCcYOzINCAMQLhiRAhiABBiKBTIKCAQQLhixAxiABDIKCAUQLhixAxiABDIGCAYQRRg9MgYIBxBFGDzSAQgxNTI5ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#mpd=~9498699176388571816/customers/reviews?p%3DCg51cGRhdGV0aW1lZGVzYxIDYWxs"; // Replace with your Google Reviews URL

    return (
        <section id="reviews" className="bg-[#191919] text-white pt-4 md:pt-8">
            {/* Reviews */}
            <div className="max-w-[1920px] px-6 py-10 mx-auto flex flex-col gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="font-figtree font-bold text-3xl lg:text-5xl mb-4 lg:mb-8 text-center">
                        Reviews
                    </h1>
                    {/* ReactGoogleReviews Widget */}
                    <div className="w-full max-w-[1920px] px-4 flex items-center justify-center h-full overflow-hidden">
                        <div className="w-full max-w-full">
                            <ReactGoogleReviews
                                layout="carousel"
                                featurableId={featurableWidgetId}
                            />
                        </div>
                    </div>
                    {/* View All Reviews Button */}
                    <a
                        href={googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-[#191919] border border-[#FCC200] hover:bg-[#FCC200] text-white font-bold py-3 px-6 rounded transition duration-300 font-figtree"
                    >
                        View All Reviews
                    </a>

                </div>
            </div>
        </section>
    );
}
