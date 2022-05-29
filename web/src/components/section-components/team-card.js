import React from 'react';

export default function TeamCard(props) {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="ltn__team-item ltn__team-item-3---">
                <div className="team-img">
                    <img style={{objectFit: 'cover', height: 360, width: '100%' }} src={props.url_image} alt={props.alt} />
                </div>
                <div className="team-info">
                    <h4>{props.name}</h4>
                    <h6 className="ltn__secondary-color">{props.position}</h6>
                    <div className="ltn__social-media">
                        <ul>
                            <li><a href={props.github} target="_blank"><i className="fab fa-github" /></a></li>
                            <li><a href={props.instagram} target="_blank"><i className="fab fa-instagram" /></a></li>
                            <li><a href={props.linkedin} target="_blank"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
