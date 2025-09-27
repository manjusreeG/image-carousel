import React from "react";
import { ArrowButton } from "../ArrowButton";
import { useAutoAdvance } from "../../hooks/useAutoAdvance";

interface ImageCarouselProps {
    images: { src: string; alt: string; caption?: string; }[];
    loop?: boolean;
    autoPlay?: boolean;
    interval?: number;
}


const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, loop = true, autoPlay = true, interval = 3500 }) => {
    const [index, setIndex] = React.useState<number>(0);
    const carouselLength = images.length;

    const prev = (() => {
        setIndex((i) => loop ? ((i - 1 + carouselLength) % carouselLength) : Math.max(0, i - 1));
    })
    const next = (() => {
        setIndex((i) => loop ? (i + 1) % carouselLength : Math.min(carouselLength - 1, i + 1));
    })
    const goTo = ((i: number) => {
        setIndex(i);
    });

    const canPrev = loop ? true : index > 0;
    const canNext = loop ? true : index < carouselLength - 1;

    const { paused, setPaused, hoverProps } = useAutoAdvance({ enabled: autoPlay && carouselLength > 1, delay: interval, onAdvance: next, pauseWhenHidden: true });

    if (carouselLength === 0) return null;
    const current = images[index];

    const handleKeys = ((e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowRight":
                e.preventDefault(); next(); break;
            case "ArrowLeft":
                e.preventDefault(); prev(); break;
            case "Home":
                e.preventDefault(); goTo(0); break;
            case "End":
                e.preventDefault(); goTo(carouselLength - 1); break;
            default:
        }
    })


    return (
        <>
            <div className="relative max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl focus-visible:outline-2" tabIndex={0}
                onKeyDown={handleKeys} {...hoverProps}>
                {/* Slide (only current image for now) */}

                <img className="absolute inset-0 z-0 w-full h-full object-cover" src={current.src} alt={current.alt} />

                {/* Controls */}
                {carouselLength > 1 && <div className="absolute inset-3 flex items-center justify-between px-4 z-20" onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
                    <ArrowButton className="h-11 w-11" direction="left" size={48} variant="solid" disabled={!canPrev} onClick={prev} />
                    <ArrowButton className="h-11 w-11" direction="right" size={48} variant="solid" disabled={!canNext} onClick={next} />
                </div>}
                {/* Indicators */}
                {carouselLength > 1 && <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                        <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={index === i} onClick={() => goTo(i)}
                            className={`h-3 w-3 rounded-full transition-colors ${index === i ? 'bg-white' : 'bg-gray-400'}`} />
                    ))}
                </div>}
                {/* Live region (visually hidden) */}
                <span className="sr-only" aria-live="polite">
                    {`Slide ${index + 1} of ${carouselLength}: ${current.alt}${paused ? "(paused)" : ""}`}
                </span>
            </div>
            {/* Caption */}
            {current.caption && <div className="mx-auto mt-3 max-w-3xl px-2">
                <p className="text-sm text-slate-200/90 line-clamp-2" title={current.caption}>{current.caption}</p>
            </div>}
            {/* <button className="items-end border border-gray-300 bg-white/20 p-1 rounded-md" onClick={() => setPaused(!paused)}>
                    {paused ? "Play" : "Pause"}
            </button> */}
        </>);
};

export default ImageCarousel;