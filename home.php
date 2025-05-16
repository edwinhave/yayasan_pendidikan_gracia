<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yayasan Pendidikan Gracia</title>
    <link
        rel="stylesheet"
        href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <style>
        .carousel-item img {
            max-height: 500px;
            object-fit: cover;
        }
    </style>
</head>

<body>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Gracia</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">Tentang</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Alumni</a></li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">Program</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">TK</a></li>
                            <li><a class="dropdown-item" href="#">SD</a></li>
                            <li><a class="dropdown-item" href="#">SMP</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">Login</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="login.php">GURU</a></li>
                            <li><a class="dropdown-item" href="#">MURID</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Cari" />
                    <button class="btn btn-outline-primary" type="submit">Cari</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- HEADING -->
    <div class="text-center mt-4">
        <h1>Welcome to Yayasan Pendidikan Gracia</h1>
    </div>

    <!-- CAROUSEL -->
    <div id="myCarousel" class="carousel slide mx-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class="active"></button>
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"></button>
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/1.JPG" class="d-block w-100 rounded-5" alt="Slide 1" />
                <div class="carousel-caption text-start">
                    <h1>Headline 1</h1>
                    <p>Deskripsi singkat slide 1.</p>
                    <a class="btn btn-primary" href="#">Sign up</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="img/2.JPG" class="d-block w-100 rounded-5" alt="Slide 2" />
                <div class="carousel-caption">
                    <h1>Headline 2</h1>
                    <p>Deskripsi slide 2.</p>
                    <a class="btn btn-primary" href="#">Learn more</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="img/3.JPG" class="d-block w-100 rounded-5" alt="Slide 3" />
                <div class="carousel-caption text-end">
                    <h1>Headline 3</h1>
                    <p>Deskripsi slide 3.</p>
                    <a class="btn btn-primary" href="#">Gallery</a>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- MAIN CONTENT -->
    <div class="container marketing my-5">
        <!-- Three columns -->
        <div class="row text-center">
            <div class="col-lg-4">
                <img
                    src="img/icon1.png"
                    class="rounded-circle"
                    width="140"
                    height="140"
                    alt="Icon 1" />
                <h2>Program Unggulan</h2>
                <p>Deskripsi singkat program TK/SD/SMP.</p>
                <a class="btn btn-secondary" href="#">Selengkapnya &raquo;</a>
            </div>
            <div class="col-lg-4">
                <img
                    src="img/icon2.png"
                    class="rounded-circle"
                    width="140"
                    height="140"
                    alt="Icon 2" />
                <h2>Fasilitas</h2>
                <p>Informasi tentang fasilitas unggulan sekolah.</p>
                <a class="btn btn-secondary" href="#">Selengkapnya &raquo;</a>
            </div>
            <div class="col-lg-4">
                <img
                    src="img/icon3.png"
                    class="rounded-circle"
                    width="140"
                    height="140"
                    alt="Icon 3" />
                <h2>Alumni</h2>
                <p>Kisah sukses alumni Gracia.</p>
                <a class="btn btn-secondary" href="#">Selengkapnya &raquo;</a>
            </div>
        </div>

        <!-- Featurettes -->
        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">
                    Keunggulan <span class="text-muted">#1</span>
                </h2>
                <p class="lead">Penjelasan detail keunggulan 1.</p>
            </div>
            <div class="col-md-5">
                <img src="img/feature1.jpg" class="img-fluid" alt="Feature 1" />
            </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">
                    Keunggulan <span class="text-muted">#2</span>
                </h2>
                <p class="lead">Penjelasan detail keunggulan 2.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src="img/feature2.jpg" class="img-fluid" alt="Feature 2" />
            </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">
                    Keunggulan <span class="text-muted">#3</span>
                </h2>
                <p class="lead">Penjelasan detail keunggulan 3.</p>
            </div>
            <div class="col-md-5">
                <img src="img/feature3.jpg" class="img-fluid" alt="Feature 3" />
            </div>
        </div>

        <hr class="featurette-divider" />
    </div>

    <!-- FOOTER -->
    <footer class="container py-4">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>
            &copy; 2025 SMK Gracia. <a href="#">Privacy</a> · <a href="#">Terms</a>
        </p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>