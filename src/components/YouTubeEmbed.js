export default function YouTubeEmbed({ videoId }) {
  return (
    <div style={{
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid var(--card-border)",
      boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
      marginBottom: "0.5rem",
      aspectRatio: "16 / 9",
      width: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <iframe 
        width="100%" 
        height="100%" 
        src={`https://www.youtube.com/embed/${videoId}?color=white&modestbranding=1&rel=0`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
}
