import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function ProductSliderV1(props) {



	let publicUrl = process.env.PUBLIC_URL + '/'
	let images = props.data;
	return <div className="ltn__img-slider-area mb-90">
		<div className="container-fluid">
			{/* tamanho imagem: 1904/1006 */}
			<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
				{images.map((item) => {
					return (
						<div className="col-lg-12">
							<div className="ltn__img-slide-item-4">
								<a href={item.url != null ? item.url: publicUrl + "assets/img/img-slide/31.jpg"} data-rel="lightcase:myCollection">
									<img  src={item.url != null ? item.url: publicUrl + "assets/img/img-slide/31.jpg"} alt="Image" />
								</a>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	</div>

}
