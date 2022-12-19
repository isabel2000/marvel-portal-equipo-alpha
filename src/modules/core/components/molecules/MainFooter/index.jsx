import './styles.scss';
import { IoLogoFacebook} from "react-icons/io";
import { IoLogoTwitter} from "react-icons/io";
import { ImInstagram} from "react-icons/im";
import { IoLogoTumblr} from "react-icons/io";
import { IoLogoYoutube} from "react-icons/io";
import { BsSnapchat} from "react-icons/bs";
import { IoLogoPinterest} from "react-icons/io";


export default function MainFooter() {
  return (
   <footer>
    <div className='mvl-main-footer'>
      <div className='Container-footer'>
        <footer className="main-footer" data-top-component="footer" data-page-position="footer">
          <div className='Contedor-1'>
            <div className='Section-1_Container-1_Links'>
            <a className="main-footer__logo">
              <span className="icon--svg main-footer__logo--svg" aria-hidden="true">
              <img src="https://www.marvel.com/static/images/favicon/mstile-150x150.png"></img>
              </span>
            </a>

            <nav className="main-footer__primary-links" aria-label="Navegación de pie de página principal">
              <ul>
                <li className="main-footer__link">
                  <a> ACERCA DE MARVEL</a>
                </li>

                <li className="main-footer__link">
                  <a> AYUDA/PREGUNTAS FRECUENTES</a>
                </li>

                <li className="main-footer__link">
                  <a>CARRERAS</a>
                </li>

                <li className="main-footer__link">
                  <a> PASANTÍAS</a>
                </li>
              </ul>
              </nav>

            <nav className="main-footer__secondary-links" aria-label="Navegación de pie de página secundario">
              <ul>
              <li className="main-footer__link">
                  <a>PUBLICIDAD</a>
                </li>

                <li className="main-footer__link">
                  <a>DISNEY+</a>
                </li>

                <li className="main-footer__link">
                  <a>MARVELHQ.COM</a>
                </li>

                <li className="main-footer__link">
                  <a> CANJEAR CÓMICS DIGITALES</a>
                </li>
              </ul>
            </nav>

            <nav className="main-footer__promo-links" aria-label="Navegación de pie de página promocional">
              <div className="main-footer__promotion">
                <a>
                <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/marvel-insider-sellpage/qa/insider-logo.98ce6f6d.png" alt="" />
                <div className="main-footer__promotion-info">
                <h4 className="main-footer__promotion-title">
                <a>INFORMACIÓN PRIVILEGIADA DE MARVEL</a>
                </h4>
                <p className="main-footer__promotion-description">
                 <a>Obtén recompensa por ser fanático de Marvel</a>
                </p>
                </div>
                </a>
              </div>

              <div className="main-footer__promotion">
                <a>
                <img src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/mu-logo-full-light.png" alt="" />
                <div className="main-footer__promotion-info">
                <h4 className="main-footer__promotion-title">
                <a>MARAVILLA ILIMITADA</a>
                </h4>
                <p className="main-footer__promotion-description">
                 <a>Accede a más de 30 000 cómics digitales</a>
                </p>
                </div>
                </a>
              </div>
            </nav>

        <nav className="main-footer__follow" aria-label="Navegación de pie de página social">
            <h4 className="main-footer__title">
            <a>SIGUE A MARVEL</a>
            </h4>

          <ul className="social-links footer__social">
            <li>
              <a><IoLogoFacebook/></a>
            </li>

            <li>
              <a><IoLogoTwitter/></a>
            </li>

            <li>
              <a><ImInstagram/></a>
            </li>

            <li>
              <a> <IoLogoTumblr/> </a>
            </li>

            <li>
              <a><IoLogoYoutube/></a>
            </li>

            <li>
              <a> <BsSnapchat/></a>
            </li>

            <li>
              <a> <IoLogoPinterest/></a>
            </li>
          </ul>
        </nav>

        <div className="main-footer__legal-wrapper">
          <nav className="main-footer__legal flex-wrapper main-footer__legal-main" aria-label="Navegación de pie de página legal">
            <a>Términos de Uso</a>

            <a>Política de privacidad</a>

            <a>Sus derechos de privacidad del estado de EE. UU.</a>

            <a>Política de privacidad en línea para niños</a>

            <a>Acuerdo de licencia</a>

            <a>Anuncios basados en intereses</a>

            <a>Términos de Marvel Insider</a>

            <a> © 2022 MARVEL</a>

          </nav>
          </div>


            </div>
          </div>
        </footer>
      </div>
 

    </div>
   </footer>

  );
}
