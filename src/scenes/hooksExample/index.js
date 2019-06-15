import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

const HooksExpample = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const { getCommentsFunction } = props;
    getCommentsFunction();
  }, []);

  useEffect(() => {
    const { comments } = props;
    setComments(comments);
  }, [props.comments]);

  return(
    <CommentsList comments={comments} />
  )
}

HooksExpample.defaultProps = {
  comments: [{}],
};
HooksExpample.propTypes = {
  comments: PropTypes.array,
  getCommentsFunction: PropTypes.func.isRequired,
  commentsLoading: PropTypes.bool.isRequired,
};


export default HooksExpample;