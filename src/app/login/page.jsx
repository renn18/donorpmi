import React from 'react'
import Home from '@/components/Template/home'
import Link from 'next/link'

const LoginPage = () => {
    return (

        <Home content={
            <div className="flex flex-col justify-center p-3 text-color-dark">
                <div className="text-center sm:text-xl md:text-3xl lg:text-2xl font-semibold px-4 py-8 rounded-3xl">
                    <form action="">
                        <div className='flex flex-col gap-9'>
                            <input
                                className='p-5 rounded-xl'
                                placeholder='Masukkan NIK'
                                type='text'
                            />
                            <input
                                className='p-5 rounded-xl'
                                placeholder='Password'
                                type='password'
                            />
                            <Link href="/forgot-password" className='text-color-red hover:text-color-primary'>
                                Lupa Password?
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="lg:h-4"></div>
                <Link href="/login" className="flex justify-center text-center text-2xl font-semibold">
                    <button className="bg-color-primary text-color-red py-3 px-8 md:px-18 lg:px-32 rounded-full">Masuk</button>
                </Link>
                <div className="lg:h-4"></div>

                <h3 className='text-center text-color-primary'>Tidak punya akun?
                    <Link href="/register" className='text-color-red hover:text-color-primary'>
                        Daftar
                    </Link>
                </h3>
            </div>
        } />
    )
}

export default LoginPage