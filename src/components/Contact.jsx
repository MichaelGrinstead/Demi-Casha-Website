import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="bg-white h-fit py-12" id="Contact">
      <div className="flex flex-col justify-center items-center gap-4 text-brown">
        <h1 className="mt-32 text-3xl">CONTACT</h1>
        <div className="flex flex-row gap-1">
          <h3>demicashamusic@gmail.com</h3>
        </div>
        <Socials />
      </div>
    </div>
  );
}
