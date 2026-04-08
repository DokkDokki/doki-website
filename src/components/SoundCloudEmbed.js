export default function SoundCloudEmbed({ trackUrl }) {
  // We encode the URL to make sure SoundCloud's iframe reads it properly
  const encodedUrl = encodeURIComponent(trackUrl);

  return (
    <div style={{
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid var(--card-border)",
      boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
      marginBottom: "0.5rem",
      background: "rgba(0,0,0,0.2)"
    }}>
      <iframe 
        width="100%" 
        height="166" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={`https://w.soundcloud.com/player/?url=${encodedUrl}&color=%238b5cf6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
      ></iframe>
    </div>
  );
}
