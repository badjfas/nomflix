import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, moviesApi } from "./../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    const { isMovie } = this.state;

    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if(isMovie){
        const request =await moviesApi.movieDetail(parsedId);
        result = request.data;
      }else{
        const request  = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({error:"Can't find anything."})
    } finally {
        this.setState({
          loading:false,
          result
        })
    }
  };
  render() {

    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
