 import'./styles.scss';
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
        
        <div className="container text-center">
            <div className="row align-items-start">

              <div className="col logo_marvel">
                <button className='logo_marvel_buton'><img className="logo" src="https://www.marvel.com/static/images/favicon/android-chrome-icon-194.png"></img></button>
              </div>

              <div className="col First_Function">
                <div className="row first_elements_principals">
                <button className='Elements_Principals'>ABOUT MARVEL</button>
                <button className='Elements_Principals'>HELP/FAQS</button>
                <button className='Elements_Principals'>CAREERS</button>
                <button className='Elements_Principals'>INTERNSHIPS</button>
              </div>
              </div>

              <div className="col Second_Function">
                <div className="row second_elements_principals">
                <button className='Elements_Principals_two'>ADVERTISING</button>
                <button className='Elements_Principals_two'>DISNEY+</button>
                <button className='Elements_Principals_two'>MARVELHQ.COM</button>
                <button className='Elements_Principals_two'>REDEEM DIGITAL COMICS</button>

              </div>
              </div>

              <div className="col third_Function">
                <div className="col third_elements_principals">
              <button className='Promotion'><img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/marvel-insider-sellpage/qa/insider-logo.98ce6f6d.png" alt=""  className='Marvel_Insider'/></button>
                <button className='text-promotion_1'> <h1 className='Promotions'>MARVEL INSIDER</h1> <p className="Promotions-SUBTITULE">Get Rewarded for Being a Marvel Fan</p></button>
                </div>
                <div className="col third_elements_principals">
                <button className='Inlimited'><img src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/mu-logo-full-light.png" alt="" className='
                    Marvel_Inlimited'/></button>
                <button className='text-promotion_2'><h1 className='Promotions'>MARVEL UNLIMITED</h1 ><p className="Promotions-SUBTITULE">Access Over 30,000+ Digital Comics</p></button>
              </div>
              </div>
              
            
              <div className="col Third_Function">
              <h1 className='Title_Follow'>FOLLOW MARVEL</h1>
              <button className='Follow'><IoLogoFacebook/> </button>
              <button className='Follow'><IoLogoTwitter/></button>
              <button className='Follow'><ImInstagram/></button>
              <button className='Follow'><IoLogoTumblr/></button> 
              <button className='Follow'><IoLogoYoutube/></button>
              <button className='Follow'><BsSnapchat/></button>
              <button className='Follow'><IoLogoPinterest/></button>
              </div>

            </div>
          </div>

          
        <div className="container text-center-2">
        <div className="row align-items-end">

        <div className="col">
        <button className='Sub-barra'> Terms of Use</button>
        </div>

        <div className="col">
        <button className='Sub-barra'> Privacy Policy</button>
        </div>

        <div className="col">
        <button className='Sub-barra'>Your US State Privacy Rights</button>
        </div>

        <div className="col">
        <button className='Sub-barra'> Childrens Online Privacy Policy</button>
        </div>

        <div className="col">
        <button className='Sub-barra'> License Agreement</button>
        </div>

        <div className="col">
        <button className='Sub-barra'> Interest-Based Ads</button>
        </div>

        <div className="col">
        <button className='Sub-barra'>Marvel Insider Terms</button>
        </div>

        <div className="col">
        <button className='Sub-barra'>© 2022 MARVEL</button>
        </div> 
          
        </div> 
        </div> 



    </footer>
    </div>
    </div>
    </footer>
);
}
