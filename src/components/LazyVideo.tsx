import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

interface LazyVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload"> {
  src: string;
  /** How the video is loaded once it is near the viewport. */
  preload?: "auto" | "metadata";
  rootMargin?: string;
}

/**
 * <video> that only downloads its file once it is about to scroll into
 * view. Videos inside a hidden layout (display: none) never intersect, so
 * they are never downloaded at all.
 */
const LazyVideo = ({ src, preload = "auto", rootMargin = "300px", ...props }: LazyVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (near && props.autoPlay) ref.current?.play().catch(() => {});
  }, [near, props.autoPlay]);

  return <video ref={ref} src={near ? src : undefined} preload={near ? preload : "none"} {...props} />;
};

export default LazyVideo;
