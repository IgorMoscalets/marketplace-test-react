import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-9">
        <h4 className="marketplace-greeting">
          Let's give it up <br /> for our marketplace!
        </h4>
        <div className="div-block-2"></div>
        <h6 className="marketplace-heading">
          Not satisfied with your current NBMon collection? You're in luck! Come visit our marketplace that contains way more NBMons than you would've ever imagined. Take your time, no one is going to hurry you up. Oh, apart from when someone else buys the NBMon you've been searching 1 hour for. I guess hurry up a bit.
        </h6>
        <h5 className="marketplace-heading-h5">Get to know your NBMon!</h5>

        <div id="carouselExampleControls" className="carousel slide nbmon-showcase" data-ride="carousel">
          <div className="carousel-inner" style={{height: "580px !important"}}>
            <div className="carousel-item active">
              <h4>I'm a mixture of a Samoyed dog and a llama. Why wouldn't you want me?</h4>
              <img src="nbmon1.png" className="mx-auto d-block" />
              <h5>Bebek Malaikat</h5>
              <h6>Uncommon NBMon - Magic, Book of Juicy Fruity Wonders, Level 59</h6>
            </div>
            <div className="carousel-item">
              <h4>Look mom! I'm a strawberry! Wait, no, a berry cute strawberry.</h4>
              <img src="nbmon2.png" className="mx-auto d-block" />
              <h5>Bebek</h5>
              <h6>Rare NBMon - Wind, Book of Air & Gods, Level 95</h6>
            </div>
            <div className="carousel-item">
              <h4>I believe I can fly ~~ I believe I can touch the sky ~ Oh wait, I can. Woops.</h4>
              <img src="nbmon3.png" className="mx-auto d-block" />
              <h5>Bebek Stroberi</h5>
              <h6>Common NBMon - Earth, Basic, Level 85</h6>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        
      </div>
      <div className="row justify-content-md-center">
        <div className="col-5 find-nbmon">
          <h1>
            Find the NBMon of your choice.
          </h1>
          <div className="divider">
            
          </div>
          <h2>
            The marketplace contains thousands of different NBMon varieties ranging from warm to light colors, wings or no wings, basic to legendary, llamas to penguins - heck, you got everything. Just choose what suits you most.
          </h2>
          <a href="index.html" className="button-marketplace">Take me to the marketplace!</a>
        </div>
        <div className="col-5">
          <img src="nbmon1.png" />
        </div>
      </div>
      <div className="row justify-content-md-center card-row">
        <div className="col-5">
          <div className="card"><img src="nbmon1.png" width="220" /><p style={{right: "130px"}}>Basic NBMon<a className="button-browse">Browse</a></p></div>
        </div>
        <div className="col-5"><div className="card" style={{backgroundColor: "#44c469"}}><img src="nbmon2.png" width="220" /><p>Uncommon NBMon<a className="button-browse">Browse</a></p></div></div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-5">
          <div className="card" style={{backgroundColor: "#ff2cf8"}}><img src="nbmon3.png" width="200" style={{marginTop: "-30px"}} /><p>Rare NBMon<a className="button-browse">Browse</a></p></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default About;