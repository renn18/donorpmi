import Home from "@/components/Template/Home";
import Link from "next/link";

const Page = () => {
    return (
        <Home content={
            <div className="flex flex-col justify-center p-3 text-color-dark">
                <div className="text-center sm:text-xl md:text-3xl lg:text-2xl font-semibold px-4 py-12 rounded-3xl">
                    <h1 className="text-4xl text-color-primary">Daftar Akun</h1>
                    <h1 className="text-color-primary/70 text-lg font-medium">Data pengguna aman bersama kami.</h1>
                    <div className="lg:h-6"></div>
                    <form action="">
                        <div className='flex flex-col gap-6'>
                            <input
                                className='px-10 py-4 rounded-xl'
                                placeholder='Masukkan Nama lengkap'
                                type='text'
                            />
                            <input
                                className='px-10 py-4 rounded-xl'
                                placeholder='Masukkan Email'
                                type='text'
                            />
                            <input
                                className='px-10 py-4 rounded-xl'
                                placeholder='Password'
                                type='password'
                            />
                            <input
                                className='px-10 py-4 rounded-xl'
                                placeholder='Konfirmasi Password'
                                type='password'
                            />
                        </div>
                    </form>
                </div>
                <div className="lg:h-4"></div>
                <Link href="/login" className="flex justify-center text-center text-2xl font-semibold">
                    <button className="bg-color-primary text-color-red py-3 px-8 md:px-18 lg:px-32 rounded-full">Masuk</button>
                </Link>
                <div className="lg:h-4"></div>

                <h3 className='text-center text-color-primary'>Sudah memiliki akun?
                    <Link href="/login" className='text-color-red hover:text-color-primary'>
                        Masuk
                    </Link>
                </h3>
            </div>
        } />
    )
}

export default Page