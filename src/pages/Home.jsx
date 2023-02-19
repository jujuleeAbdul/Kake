import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.jpeg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/brand/products.js";

import foodCategoryImg01 from "../assets/images/desserts.png";
import foodCategoryImg02 from "../assets/images/drinks.png";
import foodCategoryImg03 from "../assets/images/snacks.png";



import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "We deliver around the Blanchardstown area D15 and also parts of Finglas & Cabra.",
  },

  {
    title: "Fast Replies",
    imgUrl: featureImg02,
    desc: "Quick responses from us on all our social media platforms. Live chat coming soon..",
  },
  {
    title: "Collection",
    imgUrl: featureImg03,
    desc: "Easy Click & Collect.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotDrink, sethotDrink] = useState([]);

  useEffect(() => {
    const filteredDrink = products.filter((item) => item.category === "Drinks");
    const sliceCup = filteredDrink.slice(0, 4);
    sethotDrink(sliceCup);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "DESSERT") {
      const filteredProducts = products.filter(
        (item) => item.category === "Desserts"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "DRINK") {
      const filteredProducts = products.filter(
        (item) => item.category === "Drinks"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "SNACK") {
      const filteredProducts = products.filter(
        (item) => item.category === "Snacks"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">An easy way to place an order right now!</h5>
                <h1 className="mb-4 hero__title">
                  <span>Craving?</span> Just wait <br /> kake at
                  <span> your door</span>
                </h1>

                <p>
                Visit us and try some of our freshly made desserts. Specially made for you
                from our wide selection of topics, of your choice!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-6">
                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/menu">Order Now <i class="ri-arrow-right-s-line"></i> </Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Delivery available
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    In-Person Payments Only
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back and <span>leave</span></h2>
              <h2 className="feature__title">
              <span>the rest</span> to us
              </h2>
              <p className="mb-1 mt-4 feature__text">
                You simply order from us and then you should be good to go. 
                We offer delivery and collection.
              </p>
              <p className="feature__text">
              Simply get in touch with us on one of our social media sites down below
              if you have any questions or concerns..{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Our Popular Choices</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-3">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DESSERT" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DESSERT")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Desserts
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DRINK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DRINK")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Beverages
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SNACK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SNACK")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Snacks
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>kake?</span>
                </h2>
                <p className="tasty__treat-desc">
                We provide a wide range of services, including custom cakes, special orders,
                and wedding cakes. We use only fresh ingredients and make everything homemade
                from scratch.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      desserts
                    </p>
                    <p className="choose__us-desc">
                    For our desserts, we only use the best ingredients. There are about 
                    20+ different handcrafted desserts available. Check our Instagram to request a special order.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    We are engaged across all of our social media channels. Expect a response to emails within 24 hours 
                    at the very least. The website's live chat feature will be available soon.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Delivery and collection{" "}
                    </p>
                    <p className="choose__us-desc">
                    We provide both delivery and collection; for more information about 
                    both services, see the business hours shown below. 
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot/Cold Drinks</h2>
            </Col>

            {hotDrink.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Slide show</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>Special</span> orders look like
                </h2>
                <p className="testimonial__desc">
                To stay updated on our offers, various raffles,<br/>
                and door-to-door giveaways, <br/>
                make sure to follow our Instagram!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
