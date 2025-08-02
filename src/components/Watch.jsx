export default function Watch() {
  return (
    <div className="page-section fourth" id="Watch">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="aspect-w-16 aspect-h-9 mt-24 max-w-full lg:w-[1120px] lg:h-[630px] xxs:w-[368px] xxs:h-[207px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/V84wgdr3_eo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9 mt-24 max-w-full lg:w-[1120px] lg:h-[630px] xxs:w-[368px] xxs:h-[207px]">
          <iframe
            className="w-full h-full"
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
