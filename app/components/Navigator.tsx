import Image from "next/image";
import Link from "next/link";

const Navigator = () => {
  return (
    <nav className="w-full h-fit py-8 2xl:py-14 px-10 text-center relative flex bg-gradient-to-t to-white items-center">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-md w-6/12"
        />
      </Link>
      <h1 className="text-4xl font-bold text-center">Estadisticas Mundiales</h1>
    </nav>
  );
};
export default Navigator;
