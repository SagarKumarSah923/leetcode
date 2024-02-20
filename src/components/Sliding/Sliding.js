import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import "./Sliding.css"

const cards = [
  {
    title: "Data Analysis",
    subTitle: "GFG interview Crash course",
    chapter: 1,
    items: 20,
    image: "yellow",
  },
  {
    title: "System Design",
    subTitle: "Easy Collection",
    chapter: 2,
    items: 10,
    image: "blue",
  },
  {
    title: "Data Structures and Algorithm",
    subTitle: "GFG interview Crash course",
    chapter: 3,
    items: 15,
    image: "green",
  },
  {
    title: "Computer Organization and Architecture",
    subTitle: "Affordable Courses",
    chapter: 4,
    items: 0,
    image: "purple",
  },
  {
    title: "Computer Enginner",
    subTitle: "Affordable Courses",
    chapter: 5,
    items: 50,
    image: "gray",
  },
];

const Sliding = () => {

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      Next
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      Prev
    </div>
  );

  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Fragment>
      <div className="slider-container">
        <Slider {...options}>
          {cards.map((card, index) => (
            <div key={index}>
              <Card info={card} />
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Sliding;
