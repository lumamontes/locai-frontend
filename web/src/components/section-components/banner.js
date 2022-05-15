import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Image from '../../assets/imagem_home.jpg'
import ImageChave from '../../assets/image_chave_home.jpg'
class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
				  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <div className="slide-video mb-50 d-none">
													<img src={"/assets/img/slider/21.png"} alt="#" />
				                  </div>
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> LOCAÍ</h6>
				                  <h1 className="slide-title animated ">Encontre o lar <br /> Perfeito para você</h1>
				                  <div className="slide-brief animated">
				                    <p>Alugue de forma rápida e fácil</p>
				                  </div>
				                  {/* <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div> */}
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={Image} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner  text-right text-end">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> LOCAÍ</h6>
				                  <h1 className="slide-title animated ">Facilite a sua vida  <br />e de outras pessoas</h1>
				                  <div className="slide-brief animated">
				                    <p>Anuncie apartamentos na melhor plataforma do estado.</p>
				                  </div>
				                  <div className="btn-wrapper animated">
				                    <Link to="cadastrar-imovel" className="theme-btn-1 btn btn-effect-1">Anunciar</Link>
				                    {/* <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link> */}
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img slide-img-left">
				                <img src={ImageChave} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    {/*  */}
				  </div>
			</div>
        }
}

export default Banner