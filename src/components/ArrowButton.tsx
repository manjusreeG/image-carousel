import * as React from "react";
import LeftIcon from "../assets/leftIcon";
import RightIcon from "../assets/rightIcon";

type ArrowDirection = "left" | "right";
type ArrowVariant = "solid" | "ghost";

interface OwnProps{
    direction: ArrowDirection;
    variant?: ArrowVariant,
    size?: number;
    srLabel?: string;
}

export type ArrowButtonProps = OwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

// // 3) Optional className combiner (you can replace with your own)
function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const ArrowButton = React.forwardRef<HTMLButtonElement, ArrowButtonProps>(
  (
    {
      direction,
      variant = "solid",
      srLabel,                   
      disabled = false,           // default for disabled
      className,                  // caller can add/override classes
      type = "button",            // default button type
      ...rest                     // all other native button props (onClick, aria-*, etc.)
    },
    ref
  ) => {

    const base =
      "rounded-full grid place-items-center transition ring-1 ring-black/10 focus-visible:outline-none " +
      "focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 " +
      "disabled:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed";

    // const sizeStyle = `h-[${size}px] w-[${size}px]`;

    const variantStyle =
      variant === "solid"
        ? "bg-white/80 hover:bg-white text-slate-900 shadow"
        : "bg-black/30 hover:bg-black/40 text-white";

    const classes = cx(base, variantStyle, className);

    console.log('classes', classes);

    const label =
      srLabel ?? (direction === "left" ? "Previous slide" : "Next slide");

    return (
      <button
        ref={ref}
        type={type}
        aria-label={label}
        disabled={disabled}
        className={classes}
        {...rest}
      >
        {direction==='left'? <LeftIcon />: <RightIcon />}
      </button>
    );
  }
);

ArrowButton.displayName = "ArrowButton";