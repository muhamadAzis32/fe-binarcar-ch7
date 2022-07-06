import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from 'sweetalert2';
import { Col, Form } from "react-bootstrap";

import Car from "./CardCar";
import { getAllCars } from "../redux/actions/carsActions";

const FormSearchComponent = (props) => {
  const dispatch = useDispatch();
  const { cars, error } = useSelector((state) => state.cars);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [driver, setDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [penumpang, setPenumpang] = useState("");
  const dateTime = tanggal + " " + jam;

  function getDateTimeNow() {
    var today = new Date();
    var date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
    var dateNow = date + " " + time + "";
    return dateNow;
  }

  const filterCar = async () => {
    if (driver === undefined || driver === "") {
      return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Please select driver type',
        showConfirmButton: false,
        timer: 1000
      });
    } else if (dateTime < getDateTimeNow()) {
      return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Please select a date and time greater than now',
        showConfirmButton: false,
        timer: 1000
      });
    } else if (penumpang === undefined || penumpang === "") {
      return dispatch(getAllCars({ tanggal, jam, penumpang: 1 }));
    } else {
      return dispatch(getAllCars({ tanggal, jam, penumpang }));
    }
  };

  return (
    <>
      <section class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-12 d-flex justify-content-center">
            <div class="cars-filter">
              <div class="row row-cols-lg-auto align-items-center">
                <div class="col-12 col-md-6 col-lg select-tipe">
                  <label class="form-label" htmlFor="typeDriver">Tipe Driver </label>
                  <Form.Select id="typeDriver" value={driver} onChange={(e) => setDriver(e.target.value)} required>
                    <option value="">Pilih Tipe Driver</option>
                    <option value="yes">Dengan Supir</option>
                    <option value="no">Tanpa Supir(Lepas Kunci)</option>
                  </Form.Select>
                </div>

                <div className="col-12 col-md-6 col-lg">
                  <label htmlFor="Tanggal" className="form-label">
                    Tanggal
                  </label>
                  <Form.Control id="Tanggal" type="date" className="form-control" value={tanggal} onChange={(e) => setTanggal(e.target.value)} placeholder="Pilih Tanggal" required />
                </div>
                <div class="col-12 col-md-6 col-lg">
                  <label class="form-label" htmlFor="time">Waktu Jemput/Ambil</label>
                  <div class="input-group">
                    <Form.Select id="time" className="form-select select2" value={jam} onChange={(e) => setJam(e.target.value)} required>
                      <option value="">Pilih Waktu</option>
                      <option value="00:00:00">00.00 WIB</option>
                      <option value="01:00:00">01.00 WIB</option>
                      <option value="02:00:00">02.00 WIB</option>
                      <option value="03:00:00">03.00 WIB</option>
                      <option value="04:00:00">04.00 WIB</option>
                      <option value="05:00:00">05.00 WIB</option>
                      <option value="06:00:00">06.00 WIB</option>
                      <option value="07:00:00">07.00 WIB</option>
                      <option value="08:00:00">08.00 WIB</option>
                      <option value="09:00:00">09.00 WIB</option>
                      <option value="10:00:00">10.00 WIB</option>
                      <option value="11:00:00">11.00 WIB</option>
                      <option value="12:00:00">12.00 WIB</option>
                      <option value="13:00:00">13.00 WIB</option>
                      <option value="14:00:00">14.00 WIB</option>
                      <option value="15:00:00">15.00 WIB</option>
                      <option value="16:00:00">16.00 WIB</option>
                      <option value="17:00:00">17.00 WIB</option>
                      <option value="18:00:00">18.00 WIB</option>
                      <option value="19:00:00">19.00 WIB</option>
                      <option value="20:00:00">20.00 WIB</option>
                      <option value="21:00:00">21.00 WIB</option>
                      <option value="22:00:00">22.00 WIB</option>
                      <option value="23:00:00">23.00 WIB</option>
                    </Form.Select>
                    <button class="btn btn-outline-secondary bg-white border-user border border-start-0"
                      type="button">
                      <img src="asset/gambar/fi_clock.svg" alt="" />
                    </button>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg">
                  <label htmlFor="passenger" class="form-label">Jumlah Penumpang (Optional)</label>
                  <div class="input-group">
                    <Form.Control id="passenger" type="number" className="form-control border-end-0" placeholder="Jumlah Penumpang" value={penumpang} onChange={(e) => setPenumpang(e.target.value)} />
                    {/* <input id="passenger" name="passenger" type="number" class="form-control border-end-0"
                            placeholder="Jumlah Penumpang" /> */}
                    <span class="input-group-text bg-white border-user border" id="basic-addon1">
                      <img src="asset/gambar/fi_users.svg" alt="" />
                    </span>
                  </div>
                </div>

                <div class="col-12 col-lg">
                  <button onClick={() => filterCar()} className="nav-item-btn btn text-white submit" type="button">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main class="pb-5 pt-4 main-mobil">
        <section class="container ">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-12">
              <div class="insert-card-cars row px-2">
                {cars.length === 0 ? (
                  <></>
                ) : (
                  cars.data.map((car) => (
                    <Col key={car.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <Car car={car} />
                    </Col>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Container>
        <Row>
          {cars.length === 0 ? (
            <></>
          ) : (
            cars.data.map((car) => (
              <Col key={car.id} sm={6} md={4} className="my-2">
                <Car car={car} />
              </Col>
            ))
          )}
        </Row>
      </Container> */}
    </>
  );
};

export default FormSearchComponent;
