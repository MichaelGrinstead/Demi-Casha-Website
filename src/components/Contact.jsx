import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="page-section sixth" id="Contact">
      <div className="flex flex-col justify-center items-center gap-4 text-brown">
        <h1 className="mt-32 text-3xl">Contact</h1>
        <div className="flex flex-row gap-1">
          <h3 className="font-semibold">Email:</h3>
          <h3>demicashamusic@gmail.com</h3>
        </div>
        <div className="flex flex-row gap-1">
          <h3 className="font-semibold">Phone:</h3>
          <h3>0422 036 717</h3>
        </div>
        <Socials />
      </div>
    </div>
  );
}
