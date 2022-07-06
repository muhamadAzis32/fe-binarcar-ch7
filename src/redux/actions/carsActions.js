import Swal from 'sweetalert2';
import {GET_ALL_CARS, CARS_ERROR} from "./types";

export const getAllCars = (params) => async (dispatch) => {
    try {
        const {tanggal, jam, penumpang} = params;
        const response = await fetch(`https://be-binarcar-ch7.herokuapp.com/api/v1/cars/:${tanggal}/:${jam}/${penumpang}`);
        const data = await response.json();

        dispatch({
            type: GET_ALL_CARS,
            payload: data,
        });

        data.data.length === 0 ? Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No cars available',
            showConfirmButton: false,
            timer: 1500
        }) : Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.data.length + ' Cars available',
            showConfirmButton: false,
            timer: 1500
        });
    } catch (error) {
        dispatch({
            type: CARS_ERROR,
            payload: error.response,
        });
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        });
    }
};
