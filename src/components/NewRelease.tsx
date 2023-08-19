export default function NewRelease() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 mt-48 ml-8 font-semibold font text-white tracking-widest">
      <h1 className="xxs:text-4xl lg:text-7xl text-border-header">THE</h1>
      <h1 className="xxs:text-4xl lg:text-7xl text-border-header">RIVER</h1>
      <h2 className="xxs:hidden lg:block lg:text-3xl mt-8 text-border">
        NEW SINGLE - OUT NOW!
      </h2>
      <h2 className="lg:hidden xxs:text-sm mt-8 text-border w-36 text-center ">
        NEW SINGLE OUT NOW
      </h2>

      <a href="https://gyro.to/147205TheRiver">
        <button className="tracking-widest xxs:h-16 lg:h-12 lg:w-42 px-6 py-2 mt-8 bg-brown text-white rounded-full border border-white hover:bg-white hover:text-brown hover:border-brown">
          LISTEN HERE
        </button>
      </a>
    </div>
  );
}
