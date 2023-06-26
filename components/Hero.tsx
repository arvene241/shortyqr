import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Short Links With
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Superpowers
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Shortyqr is an dynamic short URL and QR code generator inspired by{" "}
        <Link href="https://dub.sh/" target="_blank" className="font-semibold text-blue-800">
          dub
        </Link>
      </h2>
    </section>
  );
};

export default Hero;
