export default function Tour() {
  return (
    <div className="page-section third" id="Tour">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="mt-24 w-full">
          <a
            href="https://www.songkick.com/artists/10287548"
            className="songkick-widget"
            data-theme="dark"
            data-track-button="on"
            data-detect-style="off"
            data-background-color="rgb(101,55,14,0.97)"
            data-font-color="rgb(255,255,255,1)"
            data-locale="en"
            data-other-artists="on"
            data-share-button="on"
            data-country-filter="on"
            data-rsvp="on"
            data-request-show="on"
            data-past-events="off"
            data-past-events-offtour="off"
            data-remind-me="off"
          >
            The River Tour Dates
          </a>
          <script
            defer
            src="//widget-app.songkick.com/injector/10287548"
          ></script>
        </div>
      </div>
    </div>
  );
}
