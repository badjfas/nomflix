import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, moviesApi } from "./../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
