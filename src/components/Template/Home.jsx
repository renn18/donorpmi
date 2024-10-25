import Image from "next/image";
import ImageHome from "@/app/assets/img/image-home.png";
// import Link from "next/link";

const Home = ({ content }) => {
    return (
        <>
            <div className="relative">
                <Image src={ImageHome} alt="imagehome" width={1280} height={100} className="w-full object-cover brightness-50" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {content}
                </div>
            </div>
        </>
    );
}

export default Home