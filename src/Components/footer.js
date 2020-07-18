import React, { Component } from 'react';
import  './footer.css';
import logo from './img/logo.png';
class Footer extends Component {

    render() {
        return (
            <section className="sec" id="footer">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                <div class="col-xs-12 col-sm-4 col-md-4">
                <img src ={logo} alt='logo'/>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="/javascript:void();"><i class="fa fa-angle-double-right"></i>Collection</a></li>
                            <li><a href="/category"><i class="fa fa-angle-double-right"></i>Nos articles</a></li>
                            <li><a href="/javascript:void();"><i class="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="/contact"><i class="fa fa-angle-double-right"></i>Contact us</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>Inscrivez-vous à notre newsletter</h5>
                        <p>Et ne manquez plus nos offres et conseils exclusifs.</p>
                        <div class="form-wrap" id="mc_embed_signup">
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="form-inline">
                        <input class="form-control" name="EMAIL" placeholder="Votre Adresse Email" onfocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''" onblur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Your Email Address '" required="" type="email" data-cf-modified-a25a80617e3be3cf91930cfb-=""/>
                        <button class="main_btn">Subscribe</button>
                        <div>
                        </div>
                        <div class="info"></div>
                        </form>
                        </div>
                       
                    </div>
                </div><br /><br /><br />
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul class="list-unstyled list-inline social text-center">
                            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void();" target="blank"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    
                </div>	
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p class="h6">©copy All right Reversed. Création site Web par <a class="auteurs ml-2" href="https://imen.hmida02@gmail.com" target="blank">Imen Hmida & Istabrak Jrad</a></p>
                    </div>
                   
                </div>	
            </div>
        
        </section>
        );
    }
}

export default Footer;