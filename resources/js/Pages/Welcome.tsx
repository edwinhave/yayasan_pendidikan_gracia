import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-gray-100 dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Masuk
                            </Link>
                            <Link
                                href={route('registration-ppdb.register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>

                <main className="min-h-screen w-full flex flex-col items-center p-6">
                    <section className="max-w-3xl text-center py-16">
                        <h1 className="text-4xl font-bold text-blue-700 mb-4">
                            Penerimaan Peserta Didik Baru
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Sekolah Gracia
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Mari bergabung dengan kami di Sekolah Gracia! Lingkungan belajar yang aman, nyaman, dan mendukung perkembangan karakter anak.
                        </p>
                        <Link href={route('registration-ppdb.register')}>
                            <Button>Daftar Sekarang</Button>
                        </Link>
                    </section>

                    {/* Carousel Section */}
                    <section className="w-full max-w-5xl px-4">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner rounded overflow-hidden">
                                <div className="carousel-item active">
                                    <img src="/img/1.JPG" className="d-block w-100" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/2.JPG" className="d-block w-100" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/3.JPG" className="d-block w-100" alt="Slide 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>

                    <section className="w-full max-w-4xl gap-8 py-12">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Tentang Sekolah Gracia</h3>
                                <p className="text-gray-700">
                                    Sekolah Gracia menyediakan pendidikan dari jenjang TK hingga SMK, berfokus pada pembelajaran aktif, pengembangan karakter, dan integritas rohani.
                                </p>
                            </CardContent>
                        </Card>
                    </section>
                </main>
            </div>

            {/* Bootstrap Carousel Script */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            />
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                defer
            ></script>
        </>
    );
}
