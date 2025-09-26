import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";


const demoImages = [{
  src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1600&auto=format&fit=crop",
  alt: "Snowy mountain peaks at sunrise",
  caption: "Summit — Golden light over snowy peaks",
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
  src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1600&auto=format&fit=crop",
  alt: "Straight desert highway to mountains",
  caption: "Journey — An endless road into the highlands",
}];



const DemoPage: React.FC = () => {

  return (<>
    {/* <h2 className="m-2 text-xl">Image Label</h2> */}
    <ImageCarousel images={demoImages} loop={true} />
  </>);
};

export default DemoPage;