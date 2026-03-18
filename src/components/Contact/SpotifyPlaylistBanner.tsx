const SPOTIFY_PLAYLIST_EMBED_URL =
  'https://open.spotify.com/embed/playlist/0bqn4gkQwJX9XGHgqz9ZOE?utm_source=generator&theme=0'

export default function SpotifyPlaylistBanner() {
  return (
    <div className="overflow-hidden rounded-[18px] shadow-[0_18px_44px_rgba(215,235,233,0)]">
      <iframe
        data-testid="embed-iframe"
        title="Spotify playlist player"
        src={SPOTIFY_PLAYLIST_EMBED_URL}
        width="100%"
        height="352"
        frameBorder=""
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block"
      />
    </div>
  )
}
