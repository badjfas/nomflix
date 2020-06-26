import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;

export default DetailPresenter;

DetailPresenter.propTypes = {
  result:PropTypes.object,
  error:PropTypes.string,
  loading:PropTypes.bool.isRequired,
};
