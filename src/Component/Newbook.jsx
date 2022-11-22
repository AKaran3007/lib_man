import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

function Newbook() {
    const formik = useFormik({
        initialValues: {
            Book: "",
            Tittle: "",
            Author: "",
            RackNumber: "",
            EntryTime:"",
            Availability:"",
        },
        validate: (value) => {
            var errors = {}

            if (value.Book === "") {
                errors.Book = "Please add Book Image URL"
            }
            if (value.Tittle === "") {
                errors.Tittle = "Please add Book Tittle"
            }
            if (value.Author === "") {
                errors.Author = "Please add Book Author"
            }
            if (value.RackNumber === "") {
                errors.RackNumber = "Please add Book RackNumber"
            }
            if (value.EntryTime === "") {
                errors.EntryTime = "Please add Book EntryTime"
            }
            if (value.Availability === "") {
                errors.Availability = "Please add Book Availability"
            }

            return errors 
        },
        onSubmit: async (total) => {
            await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/Libstu", total)
            alert("Book Inserted")
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label for="Book">Book Url or Website</label>
                        <input className="form-control" id='Book' type={"url"} placeholder="Only web image URL" value={formik.values.Book} onChange={formik.handleChange} name="Book" />
                        <span style={{ color: "red" }}>{formik.errors.Book}</span>
                    </div>
                    <div className="col-lg-6">
                        <label for="Tittle">Tittle</label>
                        <input className="form-control" id='Tittle' type={"text"} value={formik.values.Tittle} onChange={formik.handleChange} name="Tittle" />
                        <span style={{ color: "red" }}>{formik.errors.Tittle}</span>
                    </div>
                    <div className="col-lg-6">
                        <label for="Author">Author</label>
                        <input className="form-control" id='Author' type={"text"} value={formik.values.Author} onChange={formik.handleChange} name="Author" />
                        <span style={{ color: "red" }}>{formik.errors.Author}</span>
                    </div>
                    <div className="col-lg-6">
                        <label for="RackNumber">RackNumber</label>
                        <input className="form-control" id="RackNumber" type={"string"} value={formik.values.RackNumber} onChange={formik.handleChange} name="RackNumber" />
                        <span style={{ color: "red" }}>{formik.errors.RackNumber}</span>
                    </div>
                    <div className="col-lg-6">
                        <label for="EntryTime">EntryTime</label>
                        <input className="form-control" id='EntryTime' type={"time"} value={formik.values.EntryTime} onChange={formik.handleChange} name="EntryTime" />
                        <span style={{ color: "red" }}>{formik.errors.EntryTime}</span>
                    </div>
                    <div className="col-lg-6">
                        <label for="Availability">Availability</label>
                        <input className="form-control" id='Availability' type={"text"} placeholder="true or false" value={formik.values.Availability} onChange={formik.handleChange} name="Availability" />
                        <span style={{ color: "red" }}>{formik.errors.Availability}</span>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-2 ms-2" type="submit" value="submit" disabled={!formik.isValid} >Submit</button>
                    </div>
                </div>
            </form>
        </div>  
    )
}

export default Newbook