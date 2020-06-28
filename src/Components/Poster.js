import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Container = styled.div`
font-size: 12px;
`;

const Image = styled.div`
  height:200px;
  background-size:cover;
  background-position:center center;
  background-image: url(${props=>`https://image.tmdb.org/t/p/w300${props.url}`});
  transition : opacity 0.1s linear;
  `;

  const Rating = styled.span`
  bottom: 7px;
  right:5px;
  position: absolute;
  opacity:0;
  transition : opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating}{
      opacity:1;
    }
  }
`;




const Title = styled.span`
  display: block;
  margin-bottom:3px;
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image url={imageUrl ?imageUrl : require("../Assets/noImg.png") } />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title && title.length > 15 ? `${title.substring(0,15)}` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export default Poster;

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  yaer: PropTypes.string,
  isMovie: PropTypes.bool,
};
