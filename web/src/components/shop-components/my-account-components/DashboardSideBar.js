import React from 'react';

export default function DashboardSideBar(props) {
    return (
        <div className="col-lg-4">
        <div className="ltn__tab-menu-list mb-50">
            <div className="nav">
                <a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">Dashboard <i className="fas fa-home" /></a>
                <a data-bs-toggle="tab" href="#ltn_tab_1_2">Perfil <i className="fas fa-user" /></a>
                <a data-bs-toggle="tab" href="#ltn_tab_1_3">Endereço <i className="fas fa-map-marker-alt" /></a>
                <a data-bs-toggle="tab" href="#ltn_tab_1_4">Detalhes da Conta <i className="fas fa-user" /></a>
                <a data-bs-toggle="tab" href="#ltn_tab_1_5">Meus imóveis<i className="fa-solid fa-list" /></a>
                {/* <a data-bs-toggle="tab" href="#ltn_tab_1_6">Imóveis Favoritos <i className="fa-solid fa-heart" /></a> */}
                {/* <a data-bs-toggle="tab" href="#ltn_tab_1_7">Anunciar Imóvel <i className="fa-solid fa-map-location-dot" /></a> */}
                {/* <a data-bs-toggle="tab" href="#ltn_tab_1_8">Payments <i className="fa-solid fa-money-check-dollar" /></a> */}
                <a data-bs-toggle="tab" href="#ltn_tab_1_9">Change Password <i className="fa-solid fa-lock" /></a>
                <a href="login.html">Sair <i className="fas fa-sign-out-alt" /></a>
            </div>
        </div>
    </div>
    )
}