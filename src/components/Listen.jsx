export default function Listen() {
  return (
    <div className="page-section fifth" id="Listen">
      <h2 className="text-brown text-2xl sm:text-3xl font-semibold text-center pt-12">
        LISTEN
      </h2>
      <div className="w-3/4 flex flex-col justify-center items-center ml-auto mr-auto">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/7zJsZTaSWPQrGu3SMEqVqs?utm_source=generator&si=873502edb2a942d9"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center ml-auto mr-auto">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/1iFNhikHP3qETp4kgg81ir?utm_source=generator&si=61df6aa3862144ba"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
