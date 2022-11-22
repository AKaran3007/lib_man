import axios from 'axios'
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Bookview() {

    let params = useParams()

    let [demo, setDemo] = useState({})
    const formik = useFormik({
        initialValues: {
            Author: "",
            RackNumber: "",
            EntryTime:"",
        },
        validate: (value) => {
            var errors = {}

            if (value.Author === "") {
                errors.Author = "Please add Book Author"
            }
            if (value.RackNumber === "") {
                errors.RackNumber = "Please add Book RackNumber"
            }
            if (value.EntryTime === "") {
                errors.EntryTime = "Please add Book EntryTime"
            }

            return errors 
        },
        onSubmit: async (total) => {
            await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/Libstu", total)
            alert("Book Inserted")
        }
    })

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let pro = await axios.get(`https://62ab049e371180affbdf40f1.mockapi.io/Libstu/${params.id}`)
            setDemo(pro.data)
        } catch (error) {

        }
    }
    return (
        <>
            <div className="row">
            <form onSubmit={formik.handleSubmit}>
            <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top h10" src={demo.Book} value={formik.values.Book} onChange={formik.handleChange} name="Book" alt="Loading.." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{demo.Tittle}  value={formik.values.Tittle} onChange={formik.handleChange} name="Tittle" </h5>
                                            Author: type={"text"} value={formik.values.Author} onChange={formik.handleChange} name="Author"
                                            <br />
                                            Rack: type={"string"} value={formik.values.RackNumber} onChange={formik.handleChange} name="RackNumber"
                                            <br />
                                            InwardTime: type={"time"} value={formik.values.EntryTime} onChange={formik.handleChange} name="EntryTime"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </form>
            </div>

        </>
    );
}

export default Bookview