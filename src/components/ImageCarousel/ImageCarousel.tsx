import React from "react";
import LeftIcon from "../../assets/leftIcon";
import RightIcon from "../../assets/rightIcon";

interface ImageCarouselProps {
    images: { src: string; alt: string; caption?: string; }[];
    loop?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, loop }) => {
    const [index, setIndex] = React.useState<number>(0);

    const n = images.length;

    const prev = (() => {
        setIndex(loop ? ((index - 1 + n) % n) : Math.max(0, index - 1));
    })
    const next = (() => {
        setIndex(loop ? (index + 1) % n : Math.min(n - 1, index + 1));
    })
    const goTo = ((i: number) => {
        setIndex(i);
    })


    return (
        <>
            <div className="relative max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl">
                {/* Slide (only current image for now) */}
                <img className="absolute inset-0 z-0 w-full h-full object-cover" src={images[index].src} alt={images[index].alt} />
                {/* Controls */}
                <div className="absolute inset-3 flex items-center justify-between px-4 z-20">
                    <button disabled={index === 0} onClick={prev} aria-label="Previous Slide" className="h-11 w-11 rounded-full grid place-items-center text-gray-100 disabled:text-gray-600">
                        <LeftIcon />
                    </button>
                    <button disabled={index === n - 1} onClick={next} aria-label="Next Slide" className="h-11 w-11 rounded-full grid place-items-center text-gray-100 disabled:text-gray-600">
                        <RightIcon />
                    </button>
                </div>
                {/* Indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                        <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={index === i} onClick={() => goTo(i)}
                            className={`h-3 w-3 rounded-full transition-colors ${index === i ? 'bg-white' : 'bg-gray-400'}`} />
                    ))}
                </div>
            </div>

        </>);
};

export default ImageCarousel;