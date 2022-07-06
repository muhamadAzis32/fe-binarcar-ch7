import { Card } from "react-bootstrap";

const CardCarComponent = ({ car }) => {
  const { image, manufacture, model, rentPerDay, capacity, description, transmission, year } = car;

  return (
    <>
      <div className="card-mobil">
        <Card.Img src={image} alt="" className="img-fluid img-mobil" />
        <div className="keterangan-mobil">
          <p className="tipe">{manufacture} {model}</p>
          <h3 className="title">Rp {rentPerDay} / hari</h3>
          <p className="keterangan">{description}</p>
        </div>
        <div className="spesifikasi-mobil row">
          <div className="spesifikasi-detail d-flex justify-content-start">
            <img className="spesifikasi-icon" src="./asset/gambar/fi_users.svg" alt="" />
            <p className="spes-text">{capacity} orang</p>
          </div>
          <div className="spesifikasi-detail d-flex justify-content-start">
            <img className="spesifikasi-icon" src="./asset/gambar/fi_settings.svg" alt="" />
            <p className="spes-text">{transmission}</p>
          </div>
          <div className="spesifikasi-detail d-flex justify-content-start">
            <img className="spesifikasi-icon" src="./asset/gambar/fi_calendar.svg" alt="" />
            <p className="spes-text">Tahun {year}</p>
          </div>
        </div>
        <div className="d-grid mt-2">
          <a href="/cars" className="nav-item-btn btn btn-block text-white">Pilih Mobil</a>
        </div>
      </div>
    </>
  );
};

export default CardCarComponent;
