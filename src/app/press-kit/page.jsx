"use client";
import React from "react";
import html2pdf from "html2pdf.js";

const PressKitContent = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white h-full flex flex-col justify-start items-center  p-4 border border-brown rounded"
      style={{ height: "11in" }}
    >
      <h3 className="text-2xl font-semibold text-brown">Press Kit</h3>
      <p className="text-brown text-xl mt-10">
        An electrifying psychedelic folk singer/songwriter with a resonance that
        far exceeds her years, Demi Casha's particular brand of gum tree rock is
        quickly establishing her as one of Australia's most exciting, emerging
        artists.
      </p>
      <p className="text-brown text-xl mt-10">
        December 2021 welcomed the release of Demi's debut EP Return. Featuring
        a thumping 70s inspired sound that swings from Wild Woman, a heart
        wrenching salute to femininity to the upbeat and highly danceable Grow,
        Demi has earned regular rotation on ABC Sunshine Coast, Triple J
        Unearthed and 4ZZZ.
      </p>
      <p className="text-brown text-xl mt-10">
        With an impressive resume that includes opening for Karl S. Williams'
        sell-out Brisbane show, the Sunshine Coasts dweller deliver refreshingly
        wild vocals sweeps over audiences like the ocean water that runs through
        her veins.
      </p>
      <p className="text-brown text-xl mt-10">
        The sheer verve and honesty of Demi Cashas performances have made her a
        regular fixture at blues and folk venues and festival stages including
        Caloundra Music Festival, The Bearded Lady, It's Still A Secret and many
        more.
      </p>
      <p className="text-brown text-xl mt-10 ">
        Whether solo or performing with her band, you can hear a pin drop when
        Demi Casha takes the stage, but what follows is an emotional grenade
        that you'll never forget.
      </p>
    </div>
  );
});

PressKitContent.displayName = "PressKitContent";

export default function PressKit() {
  const contentRef = React.useRef(null);

  const downloadPdf = () => {
    const element = contentRef.current;
    const options = {
      filename: "Demi-Casha-press-kit.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save("Demi-Casha-press-kit.pdf");
  };

  return (
    <div className="press-kit relative flex flex-col items-center justify-center gap-4 h-full p-24">
      <PressKitContent ref={contentRef} />

      <button
        className="absolute top-4 right-4 tracking-widest xxs:h-16 lg:h-12 lg:w-42 px-6 py-2 mb-8 bg-brown text-white rounded-full border border-white hover:bg-white hover:text-brown hover:border-brown"
        onClick={downloadPdf}
      >
        Download as PDF
      </button>
    </div>
  );
}
