import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "./../../Components/Section";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              isMovie={true}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((upcoming) => (
            <Poster
              key={upcoming.id}
              title={upcoming.original_title}
              imageUrl={upcoming.poster_path}
              id={upcoming.id}
              isMovie={true}
              rating={upcoming.vote_average}
              year={upcoming.release_date && upcoming.release_date.substring(0,4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((popular) => (
            <Poster />
          ))}
        </Section>
      )}
      {error && <ErrorMessage color="#e74c3c" text={error} />}
    </Container>
  );
};

export default HomePresenter;

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
