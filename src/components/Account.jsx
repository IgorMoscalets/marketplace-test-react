import React from "react";

function Account() {
  return (
    <div className="account">
      <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Inventory</span></a>
                    </li>

                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Activity </span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Claim Tokens</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Withdrawal</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Account settings</span> </a>
                    </li>
                </ul>
                <hr /> 
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">banana30292</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
           <div className="row">
           	<h1>Wallet</h1>
           	<div className="col deposit-buttons">
           		<h1><p className="showBalance"></p></h1>
           		<h2><p className="showUSD"></p></h2>
           		<div className="row"><div className="col">
           			<button>Deposit to Metamask</button>
           		</div>
           		<div className="col">
           			<button>Withdraw from Metamask</button>
           		</div></div>
           		<h4>Metamask Address: <p className="showAccount"></p></h4>
           	</div>
           	<div className="col">
           		<div className="row asset-card">
           			<div className="col">1 NBMon</div>
           			<div className="col">3 NBShard</div>
           			<div className="col">1 NBXD</div>
           		</div>
           		<div className="row asset-card">
           			<div className="col">0 BD</div>
           			<div className="col">2 NBMNS</div>
           		</div>
           	</div>
           </div>
           <div className="row">
           	<h1>Activities: | <a href="#" style={{fontSize: '20px'}}>View full activities</a></h1>
           	<h2>Sep 03, 2021</h2>
           	<ul className="activities-list">
           		<li>You started t1</li>
           		<li>fjklfkf</li>
           		<li>fjkwsksdf</li>
           		<li>slkfjsfd</li>
           		<li>slfjsljdlsk</li>
           	</ul> 
           </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Account;