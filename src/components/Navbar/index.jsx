import Image from "next/image";
import Link from "next/link";
import LogoPMI from "@/app/assets/img/logo.png"
import HomeDecor from "@/app/assets/img/home-decoration.png"

const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="flex md:flex-row justify-between md:items-center gap-2 min-[1155px]:pr-[17rem]">
                <Link href="/"><Image src={LogoPMI} width={100} height={0} alt="logoPMI" className="w-[80px] md:w-[100px] lg:w-[180px]" /></Link>
                <div className="flex flex-row gap-3 md:gap-5 lg:gap-10 items-center text-xs md:text-lg lg:text-2xl font-medium md:font-medium lg:font-bold text-color-red
                ">
                    <Link href="/beranda"><h1 className="hover:text-[#ff4747]">BERANDA</h1></Link>
                    <Link href="/berita"><h1 className="hover:text-[#ff4747]">BERITA PMI</h1></Link>
                    <Link href="/stokdarah"><h1 className="hover:text-[#ff4747]">STOK DARAH</h1></Link>
                    <Link href="/infodonor"><h1 className="hover:text-[#ff4747]">INFO DONOR</h1></Link>
                </div>
                <Image src={HomeDecor} width={250} height={0} className="absolute right-0 top-0 z-10 max-[1155px]:hidden" alt="homedecor" />
            </div>
        </header>
    )
}

export default Navbar