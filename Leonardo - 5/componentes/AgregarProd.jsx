import React, { useState, useRef } from 'react';
import './AgregarProd.css'
import data from '../../public/data/relojes.json'
import Header from './Header'
import Footer from './Footer'


const AgregarProd = () => {

////////////////agregar json////////////////
const [item, setItem] = useState(data);
const [nombre, setNombre] = useState('');
const [descripcion, setDescripcion] = useState('');
const [caracteristicas, setCaracteristicas] = useState('');
const [serie, setSerie] = useState('');
const [precio, setPrecio] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoModelo = {
      serie: serie,
      imagen: imagen,
      precio: parseFloat(precio),
      descripcion: descripcion,
      caracteristicas: caracteristicas
    };

    //let data = JSON.parse(localStorage.getItem('data')) || [];
    const nuevoId = data.length > 0 ? Math.max(...data.map(r => r.id)) + 1 : 1;
    const nuevoItem = {
      id: nuevoId,
      nombre: nombre,
      modelos: [nuevoModelo]
    };

    //relojesData.push(nuevoItem);
    //localStorage.setItem('data', JSON.stringify(data));

    setItem([...item, nuevoItem]);

    //limpiar formulario
    setNombre('');
    setDescripcion('');
    setCaracteristicas('');
    setSerie('');
    setPrecio('');
    setImagen('');
};
///////////////////////////////////////////

////////////////subir imagen////////////////
const [imagen, setImagen] = useState('');
const fileInputRef = useRef(null);

const handleImageChange = (event) => {
const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
};
///////////////////////////////////////////

const handleButtonClick = () => {
    fileInputRef.current.click();
};

  return (
    <>
    <Header />
    <div className='conteiner-form'>
        <div className='form-header'>
            <h3>Agregar Producto</h3>
        </div>
        <div className='form-left'>
            <input
                type="file"
                id="cargarImagen"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            
            <div className="image-preview" >
            {imagen ? (<img src={imagen} alt="" />) : 
            (
                <span>No hay imagen seleccionada</span>
            )}
            </div>

            <input 
                id="add-img" 
                type="button" 
                value="Agregar Imagen"
                onClick={handleButtonClick}
            />
        </div>
        <div className='form-right'>
            <form className='form-right-top' onSubmit={handleSubmit}>
                <p>
                    <label>Nombre</label>
                    <br></br>
                    <input 
                        id="add-nombre" 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </p>

                <p>
                    <label>Descripcion</label>
                    <br></br>
                    <textarea 
                        id="add-des" 
                        rows="5" 
                        cols="40" 
                        maxLength="150"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    /> 
                </p>

                <p>
                    <label>Caracteristicas</label>
                    <br></br>
                    <textarea
                        id="add-des"
                        rows="7"
                        cols="40"
                        maxLength="150"
                        value={caracteristicas}
                        onChange={(e) => setCaracteristicas(e.target.value)}
                    /> 
                </p>

                <div className='form-right-under'>
                <p>
                    <label>Marca:</label>
                    <br></br>
                    <input id="add-marc" type="text" />
                </p>

                <p>
                    <label>Serie:</label>
                    <br></br>
                    <input
                        id="add-serie"
                        type="text"
                        value={serie}
                        onChange={(e) => setSerie(e.target.value)}
                    />
                </p>

                <p>
                    <label>Precio:</label>
                    <br></br>
                    S/. <input
                        id="add-price"
                        type="text"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </p>

                <p>
                    <label>Tipo:</label>
                    <br></br>
                    <input id="add-type" type="text" />
                </p>

                <p>
                    <label>Stock:</label>
                    <br></br>
                    <input id="add-stock" type="text" />
                </p>
            </div>
            <div /*className='form-footer'*/>
                <input id="save" type="submit" value="Guardar"/> 
            </div>
            </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AgregarProd