import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container py-5 pt-0">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            </li>
                            <li className="mb-2">
                                <p>binarcarrental@gmail.com</p>
                            </li>
                            <li className="mb-2">
                                <p>081-233-334-808</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#services" className="text-decoration-none link-footer">Our
                                services</a></li>
                            <li className="mb-2"><a href="#whyuse" className="text-decoration-none link-footer">Why Us</a>
                            </li>
                            <li className="mb-2"><a href="#testi" className="text-decoration-none link-footer">Testimonial</a>
                            </li>
                            <li className="mb-2"><a href="#faq-id" className="text-decoration-none link-footer">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <p className="mb-2">Connect with us</p>
                        <div className="footer_socials">
                            <a href="https://web.facebook.com/binaracademy/"
                                className="footer_social text-decoration-none " target="_blank" rel="noreferrer" >
                                <img src="asset/gambar/icon_facebook.png" alt="facebook" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Facebook"></img>
                            </a>
                            <a href="https://www.instagram.com/academybinar/" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src="asset/gambar/icon_instagram.png" alt="instagram" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Instagram"></img>
                            </a>
                            <a href="https://twitter.com/academybinar" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src="asset/gambar/icon_twitter.png" alt="icon_twitter" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitter"></img>
                            </a>
                            <a href="mailto:service@binar.co.id" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src="asset/gambar/icon_mail.png" alt="gmail" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Gmail"></img>
                            </a>
                            <a href="https://www.binaracademy.com/" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src="asset/gambar/icon_twitch.png" alt="icon_twitch" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitch"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="mb-2">Copyright Binar 2022</p>
                        <a className="navbar-brand" href="/">
                            <img src="asset/gambar/logo.svg" alt="logo-bcr"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer