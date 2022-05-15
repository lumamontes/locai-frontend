import React from 'react';

export default function WelcomeDashboardTab(props) {
return (
    <div className="tab-pane fade active show" id="ltn_tab_1_1">
        <div className="ltn__myaccount-tab-content-inner">
            <p>Olá <strong>{props.user.name}</strong></p>
            <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and
                    billing addresses</span>, and <span>edit your password and account details</span>.</p>
        </div>
    </div>
    )
}