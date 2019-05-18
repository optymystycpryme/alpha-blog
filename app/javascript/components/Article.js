import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title"><a href={this.props.path}>{this.props.title}</a></div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>
              Written by: {this.props.author}
              <p>Updated: {this.props.updated_at} ago.</p>
            </small>
          </div>
        </div>
      </React.Fragment>
    );
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
