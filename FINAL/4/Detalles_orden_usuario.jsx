import'../pages/alumno4.css'
const Detalles_orden_usuario = () => {
    return(
       <div>
         <h1>Detalles de Orden Nro 121238283</h1>
         <br/>
         <div className='titulos' style={{border:"1px solid black"}}>
            <h3>Datos de compra</h3>
         </div>
         <div className='orden'>
            <div className='cuadros'></div>
            <div className='cuadros'></div>
         </div>
         <div className='titulos' style={{border:"1px solid black"}}>
            <h3>Método de Envío</h3>
         </div>
         <div className='rectangulo'> </div>
         <div className='orden'>
            <div className='cuadros'></div>
            <div className='cuadros'></div>
         </div>
       </div>

    )

};
export default Detalles_orden_usuario;