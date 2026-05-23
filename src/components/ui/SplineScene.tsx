export function SplineScene() {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-[800px] h-full z-0 pointer-events-auto flex items-center justify-center">
      <iframe 
        src="https://my.spline.design/cybermannequin-pq2tK7uv33I9oltpZ8914qXs/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        title="Cyber Mannequin 3D Scene"
        className="w-full h-full border-0 object-cover"
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking; clipboard-write; execution-while-not-rendered; execution-while-out-of-viewport"
      ></iframe>
    </div>
  );
}
