import * as React from "react";

type Img = { src: string };

const loaded = new Set<string>();

function preload(src: string) {
  if (!src || loaded.has(src)) return;
  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = src;
  img.onload = () => loaded.add(src);
  img.onerror = () => {}; // ignore
}

export function useImagePreload(images: Img[], index: number, {lookahead = 1}={}){
    React.useEffect(()=>{
        if(images.length===0) return;
        const n = images.length;

        preload(images[index].src);

        for(let i=1; i<=lookahead; i++){
            preload(images[(index+i)%n].src);
        } 
    }, [images, index, lookahead]);
};