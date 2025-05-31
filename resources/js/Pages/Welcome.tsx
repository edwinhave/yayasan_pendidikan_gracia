import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white ">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Masuk
                            </Link>

                            <Link
                                href={route('registration-ppdb.register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>

                <main className="min-h-screen p-6 flex flex-col items-center">
                    <section className="max-w-3xl text-center py-16">
                        <h1 className="text-4xl font-bold text-blue-700 mb-4">
                            Penerimaan Peserta Didik Baru
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Sekolah Gracia
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Mari bergabung dengan kami di Sekolah Gracia! Lingkungan belajar yang
                            aman, nyaman, dan mendukung perkembangan karakter anak.
                        </p>
                        <Link href={route('registration-ppdb.register')}>
                            <Button>Daftar Sekarang</Button>
                        </Link>
                    </section>

                    <section className="w-full max-w-4xl gap-8 py-12">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Tentang Sekolah Gracia
                                </h3>
                                <p className="text-gray-700">
                                    Sekolah Gracia menyediakan pendidikan dari jenjang TK hingga
                                    SMK, berfokus pada pembelajaran aktif, pengembangan karakter,
                                    dan integritas rohani.
                                </p>
                            </CardContent>
                        </Card>
                    </section>
                </main>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
