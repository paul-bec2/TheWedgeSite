/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  // InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DemoFooter from "./components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  Sloped pactice mats are not, by any means, new to the golfing world.
                  However, this one, in particular, is. As the only affordable AND adjustable mat available today for
                  golfers of all skill levels, this product will revolutionize your ability to perform on non-optimal lies.
                  It has become uncommon for golfers to practice upwards or downwards shots and shots with the ball below or above their feet.
                  No wonder when those shots come up on the course they feel foreign.
                  <br/>
                  That all changes with The Wedge.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details and Pricing
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
              <Col md="1" />
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Product Gallery</h4>
                    <br />
                    <p className="description">
                      Our customers using The Wedge at their home simulators or on
                      all types of ranges.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="2" />
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-book-bookmark" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Testimonials</h4>
                    <br />

                    <p>
                      See what our past customers have thought of The Wedge. They
                      love it, and so will you.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="2"/>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Cade Wright</CardTitle>
                        <h6 className="card-category">Co-Owner</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Paul Bechu</CardTitle>
                        <h6 className="card-category">Co-Owner</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="2"/>
            </Row>
            <p
              className="text-center"
              style={{color: '#FFFFFF',
                      padding: '10px 80px 0px 80px'}}
              >
              We, like most of you, have been playing golf with a never-ending graving for improving
              our game. Cade started when he was a young boy, playing with his father where he garnered an
              appreciation for fluid tempo and effortless power. Paul picked up golf
              during the COVID years and has found it to be extremely difficult, yet captivating. Cade and Paul both graduated
              from the United States Naval Academy in 2022 with degrees in Robotics Engineering
              and Information Technology, respectively. It is our priveledge to provide you with a product
              that is made by golfers, for golfers.
            </p>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
