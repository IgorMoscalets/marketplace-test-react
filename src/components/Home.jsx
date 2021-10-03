import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
    
    <div class="row">
      <div class="col"><h4>Recently Listed</h4>
        <div class="block-border">
        <ul class="nav nav-tabs" id="recently-listed" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="nbmons-tab" data-bs-toggle="tab" data-bs-target="#nbmons" type="button" role="tab" aria-controls="nbmons" aria-selected="true">NBMons</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="lands-tab" data-bs-toggle="tab" data-bs-target="#lands" type="button" role="tab" aria-controls="lands" aria-selected="false">Lands</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="items-tab" data-bs-toggle="tab" data-bs-target="#items" type="button" role="tab" aria-controls="items" aria-selected="false">Items</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="bundles-tab" data-bs-toggle="tab" data-bs-target="#bundles" type="button" role="tab" aria-controls="bundles" aria-selected="false">Bundles</button>
          </li>
        </ul>
        <div class="tab-content recently" id="recentlylisted-content">
          <div class="tab-pane fade show active" id="nbmons" role="tabpanel" aria-labelledby="nbmons-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="lands" role="tabpanel" aria-labelledby="lands-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="item" role="tabpanel" aria-labelledby="item-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="bundles" role="tabpanel" aria-labelledby="bundles-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div class="col"><h4>Recently Sold</h4>
        <div class="block-border"><ul class="nav nav-tabs" id="recently-sold" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="nbmons-sold-tab" data-bs-toggle="tab" data-bs-target="#nbmons-sold" type="button" role="tab" aria-controls="nbmons-sold" aria-selected="true">NBMons</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="lands-sold-tab" data-bs-toggle="tab" data-bs-target="#lands-sold" type="button" role="tab" aria-controls="lands-sold" aria-selected="false">Lands</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="items-sold-tab" data-bs-toggle="tab" data-bs-target="#items-sold" type="button" role="tab" aria-controls="items-sold" aria-selected="false">Items</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="bundles-sold-tab" data-bs-toggle="tab" data-bs-target="#bundles-sold" type="button" role="tab" aria-controls="bundles-sold" aria-selected="false">Bundles</button>
          </li>
        </ul>
        <div class="tab-content recently" id="recentlysold-content">
          <div class="tab-pane fade show active" id="nbmons-sold" role="tabpanel" aria-labelledby="nbmons-sold-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="lands-sold" role="tabpanel" aria-labelledby="lands-sold-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="item-sold" role="tabpanel" aria-labelledby="item-sold-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="bundles-sold" role="tabpanel" aria-labelledby="bundles-sold-tab">
            <ul>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
              <li><img src="monster-icon.png" width="50" />Nbmon Info</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col block-border salepan">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Last 24h</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">7 days</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">30 days</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row">
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Sale</h5><h2>59,627</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Volume</h5><h2>6500</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>NBMons Sold</h5><h2>54,647</h2> 
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row">
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Sale</h5><h2>593,627</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Volume</h5><h2>65200</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>NBMons Sold</h5><h2>254,647</h2>  
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div class="row">
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Sale</h5><h2>69,627</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>Total Volume</h5><h2>9500</h2>
              </div>
              <div class="col">
                <img src="market.png" width="40" />
                <h5>NBMons Sold</h5><h2>94,647</h2> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Home;