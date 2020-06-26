import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "./../../Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="now Playing">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((upcoming) => upcoming.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((popular) => popular.title)}
        </Section>
      )}
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
