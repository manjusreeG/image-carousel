import * as React from "react";

type UseAutoAdvanceOptions = {
  enabled?: boolean;
  delay?: number;
  onAdvance: () => void;
  pauseWhenHidden?: boolean;
};

type UseAutoAdvanceReturn = {
  paused: boolean;
  setPaused: (v: boolean) => void;
  hoverProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
};

export function useAutoAdvance({
  enabled = true,
  delay = 3500,
  onAdvance,
  pauseWhenHidden = true,
}: UseAutoAdvanceOptions): UseAutoAdvanceReturn {
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!pauseWhenHidden) return;
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pauseWhenHidden]);

  // Autoplay timer
  React.useEffect(() => {
    if (!enabled || paused) return;
    const id = window.setTimeout(() => {
      onAdvance();
    }, delay);
    return () => window.clearTimeout(id); // IMPORTANT: clearTimeout, not clearInterval
  }, [enabled, paused, delay, onAdvance]);

  const hoverProps = React.useMemo(
    () => ({
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
    }),
    []
  );

  return { paused, setPaused, hoverProps };
}
