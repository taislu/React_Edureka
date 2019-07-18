import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from "../actions";

import Picker from "../components/Picker";
import Posts from "../components/Posts";

class App extends Component {
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    /*** Newly added below ***/
    fetchPosts: PropTypes.func.isRequired,
    setReddit: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired
  };

  componentDidMount() {
    /*
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
    */
    const { fetchPosts, selectedReddit } = this.props;
    fetchPosts(selectedReddit);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      /*
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
      */
      const { fetchPosts, selectedReddit } = nextProps;
      fetchPosts(selectedReddit);
    }
  }

  handleChange = nextReddit => {
    //this.props.dispatch(selectReddit(nextReddit));
    this.props.setReddit(nextReddit);
  };

  handleRefreshClick = e => {
    e.preventDefault();
    /*
    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
    */
    const { refresh, fetchPosts, selectedReddit } = this.props;
    refresh(selectedReddit);
    fetchPosts(selectedReddit);
  };

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <Picker
          value={selectedReddit}
          onChange={this.handleChange}
          options={["reactjs", "frontend"]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last Modified at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
          {!isFetching && (
            /*<a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>*/
            <button onClick={this.handleRefreshClick}>Refresh </button>
          )}
        </p>
        {isEmpty ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  //store.dispatch
  return {
    fetchPosts: reddit => {
      dispatch(fetchPostsIfNeeded(reddit));
    },
    setReddit: reddit => {
      dispatch(selectReddit(reddit));
    },
    refresh: reddit => {
      dispatch(invalidateReddit(reddit));
    }
  };
};

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsByReddit[
    selectedReddit
  ] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//export default connect(mapStateToProps)(App)
