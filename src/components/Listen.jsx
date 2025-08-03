export default function Listen() {
  return (
    <div className="page-section fifth" id="Listen">
      <h2 className="text-brown text-2xl sm:text-3xl font-semibold text-center pt-12">
        LISTEN
      </h2>
      <div className="w-3/4 flex flex-col justify-center items-center ml-auto mr-auto">
        <iframe
          className="mt-12"
          src="https://open.spotify.com/embed/album/00r8OsG6wTaljM9qluRviz?utm_source=generator&theme=1"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center ml-auto mr-auto">
        <iframe
          className="mt-8 mb-8 h-[620px]"
          src="https://open.spotify.com/embed/album/6JgvUNnkW8yiGg3vlADCDA?utm_source=generator&theme=1"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
