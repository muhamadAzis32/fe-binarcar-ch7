import React from 'react'

function Whyus() {
    return (
        <section className="why-use" id="whyuse">
            <div className="container">
                <div className="why-header">
                    <h2>Why Us?</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="row g-4 why-body ">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="asset/gambar/icon_complete.png" alt="complete" className="img-fluid mb-3"></img>
                                <h5 className="card-title">Mobil Lengkap</h5>
                                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                    terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="asset/gambar/icon_price.png" alt="price" className="img-fluid mb-3"></img>
                                <h5 className="card-title">Harga Murah</h5>
                                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                    mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="asset/gambar/icon_24hrs.png" alt="time" className="img-fluid mb-3"></img>
                                <h5 className="card-title">Layanan 24 Jam</h5>
                                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                    tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="asset/gambar/icon_professional.png" alt="" className="img-fluid mb-3"></img>
                                <h5 className="card-title">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                    tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whyus