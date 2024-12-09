import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, StaticQuery } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const specialtyBoard = {
  minHeight: '20rem',
  background: 'var(--siteYellow)',
  border: '4px solid var(--sitePink)',
  borderRadius: '.5rem',
  padding: '1rem',
};

const specialtyBoardContainer = {
  height: '100%',
  paddingBottom: '3rem'
}

const menuH2 = {
  fontSize: 'var(--fontMd)',
  color: 'var(--sitePink)',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '2rem'
};

const drinkCard = {
  minHeight: '15rem',
  maxWidth: '15rem',
  margin: '0 1rem',
  background: 'var(--sitePink)',
  color: 'var(--black)',
  position: 'relative',
  border: ' 2px solid var(--siteYellow)',
  boxShadow: '0 0 8px black',
};

const cardTitle = {
  position: 'absolute',
  top: '-10%',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '2px solid var(--siteYellow)',
  padding: '.5rem',
  borderRadius: '.5rem',
  background: 'var(--sitePink)',
  boxShadow: '0 0 8px black',
  width: '90%',
  textAlign: 'center',
  fontSize: 'var(--fontXs)',
  color: 'var(--siteYellow)',
  textTransform: 'uppercase',
};

const cardText = {
  textAlign: 'center',
  color: 'var(--siteYellow)',
  textTransform: 'uppercase',
  marginTop: '1rem',
};

const cardImg = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '-3rem',
  padding: '.5rem',
  backgroundColor: 'var(--sitePink)',
  border: '2px solid var(--siteYellow)',
  borderRadius: '.25rem',
  boxShadow: '0 0 8px black',
  width: '6.25rem',
  height: '6.25rem',
}

const cardImgImg = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SpecialtyBoard = () => (
  <div className=''style={specialtyBoard}>
    <h2 style={menuH2}> Specialty Menu </h2>

    <StaticQuery
      query={specialtyDrink}
      render={(data) => {
        const drink = data.allContentfulMenuDrink.edges;
        return (
          <div style={specialtyBoardContainer}>
            <Slider {...settings}>
              {drink.map(({ node }, i) => (
                <div key={i} className="drink-card" style={drinkCard}>
                  <div className="card-body">
                    <div className='card-title' style={cardTitle}>
                      {node.drinkName}
                    </div>
                    <p className='card-text' style={cardText}>
                      {node.flavors}
                    </p>
                  </div>
                  <div style={cardImg}
                    className="card-bottom">
                      <GatsbyImage
                      style={cardImgImg}
                      image={node.drinkImage.gatsbyImageData}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        );
      }}
    />
  </div>
)


const specialtyDrink = graphql`
   query {
    allContentfulMenuDrink {
      edges {
        node {
          contentful_id
          drinkName
          flavors
          drinkImage {
            gatsbyImageData(width: 100, formats: AUTO)
          }
        }
      }
    }
  }
  `


export default SpecialtyBoard;
