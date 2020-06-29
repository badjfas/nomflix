import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
            <Helmet>
        <title>TV | Nomflix</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => {
            return (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                isMovie={false}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            );
          })}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((popular) => {
            return (
              <Poster
                key={popular.id}
                id={popular.id}
                title={popular.original_name}
                imageUrl={popular.poster_path}
                isMovie={false}
                rating={popular.vote_average}
                year={
                  popular.first_air_date &&
                  popular.first_air_date.substring(0, 4)
                }
              />
            );
          })}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((airingToday) => {
            return (
              <Poster
                key={airingToday.id}
                id={airingToday.id}
                title={airingToday.original_name}
                imageUrl={airingToday.poster_path}
                isMovie={false}
                rating={airingToday.vote_average}
                year={
                  airingToday.first_air_date &&
                  airingToday.first_air_date.substring(0, 4)
                }
              />
            );
          })}
        </Section>
      )}
      {error && <ErrorMessage color="#e74c3c" text={error} />}
    </Container>
  );

export default TVPresenter;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
