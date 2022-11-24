import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '고현철',
    comment: '안녕하세요'
  },
  {
    name: '이민숙',
    comment: '반가워요'
  }
];

function CommentList(props) {
  return(
    <div>
      {comments.map((comment) => {
        return(
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;