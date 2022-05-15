import React from 'react';

export default function EditUserFormTab(props) {
    return (
        <div className="tab-pane fade" id="ltn_tab_1_4">
            <div className="ltn__myaccount-tab-content-inner">
                <p>The following addresses will be used on the checkout page by default.</p>
                <div className="ltn__form-box">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Nome:</label>
                                <input type="text" name="ltn__name" />
                            </div>
                            <div className="col-md-6">
                                <label>Email:</label>
                                <input type="email" name="ltn__lastname"   placeholder="example@example.com" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label>Cidade</label>
                                <input type="text" name="ltn__name" />
                            </div>
                            <div className="col-md-6">
                                <label>Estado:</label>
                                <input type="email" name="ltn__lastname"   placeholder="example@example.com" />
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}