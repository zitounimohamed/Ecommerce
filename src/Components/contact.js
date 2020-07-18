import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'; 

class Contact extends Component {
    constructor(props) {	
		super(props);
		this.state={
			email : null ,
			name : null,
			subject: null ,
			msg : null
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	resetForm(){
        document.getElementById('contact-form').reset();
    }
	handleSubmit(e){
		e.preventDefault();
	
		
	
        axios({
            method: "POST", 
            url:"http://localhost:5000/contact/send", 
            data: {
				name: this.state.name,   
				subject : this.state.subject,
                email: this.state.email,  
                msg: this.state.msg
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
	handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    render() {
        return (
 
    <section class="ftco-section bg-light">
        <div class="contai">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="wrapper">
                        <div class="row no-gutters ">
                            <div class="col-md-7 d-flex">
                                <div class="contact-wrap w-100 p-md-5 p-4">
                                    <h3 class="mb-4">entrer en contact</h3>
                                        <form onSubmit={this.handleSubmit.bind(this)} method="POST" id="contact-form" class="contactForm">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="name" id="name" placeholder="Nom et Prenom"  onChange={this.handleInputChange}/>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email"  onChange={this.handleInputChange}/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group pt-2">
                                                        <input type="text" class="form-control " name="subject" id="subject" placeholder="SubjeSujetct"  onChange={this.handleInputChange}/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group pt-2">
                                                        <textarea name="message" class="form-control" name="msg" cols="30" rows="7" placeholder="Message"  onChange={this.handleInputChange}></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group pt-5">
                                                        <input type="submit" value="Send Message" class="btn btn-primary"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                </div>
                            </div>


                <div class="col-md-5 d-flex align-items-stretch"  style ={{marginTop:'4%'}}>
                    <div class="info-wrap bg-primary w-100 p-lg-5 p-4" >
                        <h3 class="mb-4 mt-md-4">Contacter Nous</h3>
                            <div class="dbox w-100 d-flex align-items-start pt-4">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-map-marker"style ={{color :'black'}} ></span>
                                </div>

                                 <div class="text pl-3">
                                     <p><span>Addresse:</span>Kheniss, Monastir., Route de Kheniss, Monastir 5000</p>
                                </div>
                            </div>

                            <div class="dbox w-100 d-flex align-items-center pt-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-phone" style ={{color :'black'}}></span>
                                </div>
                                <div class="text pl-3">
                                     <p><span>Telephone:</span> <a href="tel://73531134">+216 73531134</a></p>
                                </div>
                            </div>

                            <div class="dbox w-100 d-flex align-items-center pt-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-paper-plane" style ={{color :'black'}}></span>
                                </div>
                                <div class="text pl-3">
                                    <p><span>Email:</span> <a href="/email-kia.monastir@gmail.com"><span class="__cf_email__" data-cfemail="kia.monastir@gmail.com">kia.monastir@gmail.com</span></a></p>
                                </div>
                            </div>

                            <div class="dbox w-100 d-flex align-items-center pt-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-globe" style ={{color :'black'}}></span>
                                </div>
                                <div class="text pl-3">
                                    <p><span>Site:</span> <a href="#">Sayaratna.com</a></p>
                                </div>
                            </div>
                    </div>
                </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</section>

);
    }
}

export default Contact;