"use client";
import { useAbout } from "../hooks/useAbout";

export default function About() {
  const { paragraphOne, paragraphTwo, paragraphThree, paragraphFour } =
    useAbout();

  console.log({ paragraphOne, paragraphTwo, paragraphThree, paragraphFour });

  return (
    <section id="About" className="h-full flex flex-col gap-6 bg-white">
      {paragraphOne.text && !paragraphOne.error && (
        <p className="text-brown text-xl p-6 pt-24">{paragraphOne.text}</p>
      )}
      {paragraphTwo.text && !paragraphTwo.error && (
        <p className="text-brown text-xl p-6">{paragraphTwo.text}</p>
      )}
      {paragraphThree.text && !paragraphThree.error && (
        <p className="text-brown text-xl p-6">{paragraphThree.text}</p>
      )}
      {paragraphFour.text && !paragraphFour.error && (
        <p className="text-brown text-xl p-6">{paragraphFour.text}</p>
      )}
    </section>
  );
}
