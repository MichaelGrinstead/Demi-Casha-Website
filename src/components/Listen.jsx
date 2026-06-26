export default function Listen() {
  return (
    <div className="page-section fifth" id="Listen">
      <div className="h-full flex flex-col justify-center items-center gap-6">
        <h2 className="text-brown text-2xl sm:text-3xl font-semibold text-center pt-12">
          LISTEN
        </h2>
        <div className="w-3/4 flex flex-col justify-center items-center ml-auto mr-auto">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/13kmurvt7Cd6vgXapw6upR?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
