import React from 'react';

export default function UserProfileTab(props) {
    return (
        <div className="tab-pane fade" id="ltn_tab_1_2">

            <div className="ltn__myaccount-tab-content-inner">
                {/* comment-area */}
                <div className="ltn__comment-area mb-50">
                    <div className="ltn-author-introducing clearfix">
                        <div className="author-img">
                            <img src={"assets/img/blog/author.jpg"} alt="Author Image" />
                        </div>
                        {/* <div className="author-info">
																<h6>{user.user_type_id == 1 ? 'Locatário' : (user.user_type_id == 2 ? 'Anunciante' : 'Corretor')}</h6>
																<h2>{user.name}</h2>
																<div className="footer-address">
																	<ul>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-placeholder" />
																			</div>
																			<div className="footer-address-info">
																				<p>{fullUser[0].city}, {fullUser[0].state}, Brasil</p>
																			</div>
																		</li>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-call" />
																			</div>
																			<div className="footer-address-info">
																				<p><a href="tel:+0123-456789">+{fullUser[0].telephone}</a></p>
																			</div>
																		</li>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-mail" />
																			</div>
																			<div className="footer-address-info">
																				<p><a href="mailto:example@example.com">{fullUser[0].email}</a></p>
																			</div>
																		</li>
																	</ul>
																</div>
															</div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}