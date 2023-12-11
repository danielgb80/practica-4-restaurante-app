import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { db } from './config/database';
import { collection, addDoc} from "firebase/firestore";

function App() {

    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        teléfono: "",
        comentarios: ""
    });


    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    }

    const reservar = async (event) => {
        event.preventDefault();
        console.log(formulario);
        // aqui ya podemos mandar "formulario" a firebase
        await addDoc(collection(db, "reservaciones"), formulario);
        // El codigo siguiente es para traer esos datos....
        // const datos = await getDocs(collection(db, "reservas"));
        // console.log(datos.docs.map((doc)=> {return doc.data()}));
    }

    return (
        <>
            <Header />
            <br></br>
            <div className="container">
                <h1 className="text-center">Menú</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://cdn7.kiwilimon.com/recetaimagen/36938/50874.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title, text-center">Comida Mexicana</h3>
                                <ul>
                                    <li>Sopa de verduras</li>
                                    <li>Arroz o Spaguetti</li>
                                    <li>Enchiladas verdes c/pollo</li>
                                    <li>Postre</li>
                                </ul>
                                <h4 className="text-center">$110 MXN</h4>
                                <p className="card-text">Incluye frijoles y agua. Pregunta por nuestras opciones para vegetarianos.</p>
                                <div className="col-md-12 text-center">
                                    <a href="#" className="btn btn-warning">Ordénalo aquí</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://scontent.fmex10-3.fna.fbcdn.net/v/t31.18172-8/28060913_1664188050336317_699870134755511242_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFhE0pCr4tLlP-70bk5xpHyQmm_Njo7fbNCab82Ojt9s0s1wonXyNUvy86mvcBmru0&_nc_ohc=uhUc_NGqNT4AX99tsLY&_nc_ht=scontent.fmex10-3.fna&oh=00_AfA1KDvMFevyJddfkc2uPdBpl6bxrLRk5lQ4tzpa8vGMUg&oe=659D81AC" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title, text-center">Comida China</h3>
                                <ul>
                                    <li>Arroz frito</li>
                                    <li>Tofu marinado con verduras</li>
                                    <li>Pollo a la naranja </li>
                                    <li>Rollitos primavera</li>
                                </ul>
                                <h4 className="text-center">$105 MXN</h4>
                                <p className="card-text">Incluye agua. Pregunta por nuestras opciones para vegetarianos.</p>

                                <div className="col-md-12 text-center">
                                    <a href="#" className="btn btn-warning">Ordénalo aquí</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg&q=60" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title, text-center">Comida Italiana</h3>
                                <ul>
                                    <li>Pasta con salsa boloñesa</li>
                                    <li>Lasaña de pescado y marisco</li>
                                    <li>Buñuelos de bacalao </li>
                                    <li>Tiramisu italiano</li>
                                </ul>
                                <h4 className="text-center">$115 MXN</h4>
                                <p className="card-text">Incluye agua. Pregunta por nuestras opciones para vegetarianos.</p>
                                <div className="col-md-12 text-center">
                                    <a href="#" className="btn btn-warning">Ordénalo aquí</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <video className="col-12" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://player.vimeo.com/external/374259135.sd.mp4?s=06d23d5292859073330f2a836f05bc2460cadc37&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                </video>
                <hr />

                <div className="row" >
                    <div className="col-md-6" style={{ backgroundColor: "#f1f1f1", padding: "25px" }} >
                        <h4 className="text-center"> RESERVACIONES:</h4>
                        <p>Déjanos tu contacto y nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
                        <p>Dirección: Centro Histórico Ciudad de México, MX 12345</p>
                        <p>Tel: +1 (55) 1123 4567</p>
                        <p>email: contacto@restaurante.com</p>
                        <p>
                            Esta es una aplicación ficticia para fines académicos.<br></br><br></br>
                            Todos los derechos reservados. <br></br>DanielGB & UCamp 2023
                        </p>
                    </div>
                    <div className="col-md-6">

                        <form onSubmit={reservar} style={{ backgroundColor: "#FFBD38", padding: "25px" }}>
                            <div className="mb-2">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" name='nombre' onChange={handleInputChange} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={handleInputChange} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" name='teléfono' onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mensaje & comentarios</label>
                                <textarea className="form-control" rows="" name='comentarios' onChange={handleInputChange}></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button className='btn btn-primary'>Reservar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer titulo='Suscribete a nuestras noticias' />
        </>
    )
}

export default App
