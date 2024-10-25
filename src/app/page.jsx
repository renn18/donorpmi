import Link from "next/link";
import HomeTemplate from "@/components/Template/home";

export default function Home() {
  return (
    <HomeTemplate content={
      <div className="flex flex-col justify-center p-3 text-color-primary">
        <div className="text-center sm:text-xl md:text-3xl lg:text-7xl font-bold px-4 py-8 rounded-3xl">
          Setetes darah Anda,
          Nyawa bagai sesama.
        </div>
        <div className="lg:h-[10rem]"></div>
        <Link href="/login" className="flex justify-center text-center text-2xl font-semibold">
          <button className="bg-color-primary text-color-red py-3 px-8 md:px-18 lg:px-32 rounded-full">Masuk</button>
        </Link>
      </div>
    } />
  );
}
