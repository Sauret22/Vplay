import "./Footer.css"

const Footer =()=>{
    return   <footer>
    <div class="footer-container">
      <div class="footer-info">
        <p>&copy; 2024 Mi Sitio Web</p>
        <a href="#">Contacto</a>
        <a href="#">Aviso Legal</a>
        <a href="#">Política de Privacidad</a>
      </div>
      <div class="footer-redes">
        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
}

export default Footer