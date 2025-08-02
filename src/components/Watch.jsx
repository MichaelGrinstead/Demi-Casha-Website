export default function Watch() {
  return (
    <div className="page-section fourth" id="Watch">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="aspect-w-16 aspect-h-9 mt-24 max-w-full lg:w-[1120px] lg:h-[630px] xxs:w-[368px] xxs:h-[207px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KyP1IucP_k4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9 mt-24 max-w-full lg:w-[1120px] lg:h-[630px] xxs:w-[368px] xxs:h-[207px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/m43JdB1Fp2I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
