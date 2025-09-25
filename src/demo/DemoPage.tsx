import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import LeftIcon from "../assets/leftIcon";
import RightIcon from "../assets/rightIcon";


const demoImages = [{
  src: 'https://images.unsplash.com/photo-1520974735194-7f4da3a0b2ed?q=80&w=1600&auto=format&fit=crop',
  alt: "Sunlit mountain ridge",
  caption: "Explore — A crisp morning over the Alps"
},
{
  src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  alt: "Desert dunes at dusk",
  caption: "Drift — Dune lines meeting purple skies"
},
{
  src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop',
  alt: "Forest trail with fog",
  caption: "Breathe — Misty pines and a quiet path"
},
{
  src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1600&auto=format&fit=crop',
  alt: "City skyline at night",
  caption: "Shine — City lights under the stars"
}];



const DemoPage: React.FC = () => {

    return (<>
        <h2 className="m-2 text-xl">Image Label</h2>
        <div className="relative max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl"> 
            <ImageCarousel src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
                alt='City skyline at night' caption='Shine — City lights under the stars' />
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                <button className="h-11 w-11 rounded-full grid place-items-center"><LeftIcon /></button>
                <button className="h-11 w-11 rounded-full grid place-items-center"><RightIcon /></button>
            </div>
        </div>
    </>);
};

export default DemoPage;