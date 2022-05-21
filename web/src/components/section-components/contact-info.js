import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-90">
				<div className="container">
				<div className="row">
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/10.png"} alt="Icon Image" />
						</div>
						<h3>Email</h3>
						<p>
							lumagoesmontes@gmail.com, pantoja24gabriela@gmail.com,
							ale.silva1120@gmail.com 
							
						</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/11.png"} alt="Icon Image" />
						</div>
						<h3>Celular</h3>
						<p>(96)981253685
						0800 590 6060 <br />
						+0123-456789
						</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>Endereço</h3>
						<p>R. Pedro Siqueira, 333 - Jardim Marco Zero, Macapá - AP, 68903-150 <br />
						</p>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactInfo