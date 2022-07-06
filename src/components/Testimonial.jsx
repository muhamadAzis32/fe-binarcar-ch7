import React from "react";

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Testimonial() {

    const options = {
        loop: true,
        margin: 10,
        dots: false,
        navText: ["<div class='btn-nav'>&#x2039;</div>", "<div class='btn-nav'>&#x203a;</div>"],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                stagePadding: 250,
            }
        }
    };

    return (
        <>
            <section class="testimonial" id="testi">
                <div class="container-fluid">
                    <div class="testi-header">
                        <h2>Testimonial</h2>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <ReactOwlCarousel className="owl-theme"{...options}>

                        <div class="item">
                            <div class="card mb-3">
                                <div class="row">
                                    <div class="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-1.png"
                                            class="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="card-body">
                                            <div class="font-10">
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                            </div>
                                            <p class="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 class="card-title">Putri, Jakarta</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="card mb-3">
                                <div class="row">
                                    <div class="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            class="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="card-body">
                                            <div class="font-10">
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                            </div>
                                            <p class="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 class="card-title">Joni, Bandung</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="card mb-3">
                                <div class="row">
                                    <div class="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            class="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="card-body">
                                            <div class="font-10">
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                            </div>
                                            <p class="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 class="card-title">Hasan, Purwakarta</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="card mb-3">
                                <div class="row">
                                    <div class="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            class="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="card-body">
                                            <div class="font-10">
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                                <i class="uis uis-star text-success"></i>
                                            </div>
                                            <p class="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 class="card-title">Iqbal, Purwakarta</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </section >
        </>
    );

}

export default Testimonial