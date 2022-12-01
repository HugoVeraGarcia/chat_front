//import { EnterpriseForm } from "../components"
import "../styles/styles.home.css";
//import "../styles/styles.form.css"
import comida from "../assets/comida1.jpg"





const Home = () => {

return (
    <div className="main_container">
        <div className="section_img">
            <img src={comida} alt="" />
        </div>
        <div className="section_text">
            <h1>En eatbot </h1>
            <p className="texto_container">Ya puedes dejar volar tu imaginación porque ahora todo lo que quieras lo llevamos directo desde tu cabeza a donde estés, ¡en minutos!
¿Lo quieres? ¡Lo tienes! Pide a los mejores restaurantes, haz el pedido del súper, compra la comida para tu mascota, la bebida para los amigos, pide lo que necesites de la farmacia y ¡mucho más!
En simples pasos puedes tener lo que quieras directamente en tu puerta: Descubre, pide y recibe a domicilio con eatbot.</p>
        </div>
        <div className="section_footer">
            <div className="detail_footer">Quienes somos</div>
            <div className="detail_footer">Términos y condiciones</div>
            <div className="detail_footer">Privacidad</div>
            <div className="detail_footer">Top comidas</div>
            <div className="detail_footer">Top cadenas</div>
            <div className="detail_footer">Registra tu negocio</div>
            <div className="detail_footer">Centros de socios</div>
            <div className="detail_footer">Acuerdos corporativos</div>
            <div className="detail_footer">Blog</div>
        </div>
    </div>
);

}

export default Home;
