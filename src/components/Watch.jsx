export default function Watch() {
  return (
    <div className="page-section fourth" id="Watch">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="mt-24">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/V84wgdr3_eo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className="mt-24
            "
        >
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/SB1fRZU86uE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
