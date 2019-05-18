import React from "react"
import PropTypes from "prop-types"
import { distanceInWordsToNow } from "date-fns";
class Article extends React.Component {
  render () {
    let updatedAt = distanceInWordsToNow(
      new Date(this.props.updated_at)
    );

    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>
              Written by: {this.props.author}
              <p>
                Updated: {updatedAt} ago.
              </p>
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    let self = this;
    setInterval(function() { self.forceUpdate() }, 1000);
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  updated_at: PropTypes.string,
  author: PropTypes.string
};
export default Article
