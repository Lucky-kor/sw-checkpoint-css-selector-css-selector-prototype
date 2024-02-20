import React from 'react';

const FinalResults = (props) => {
    return <div>
        {props.total} 문제 중 {props.score} 문제를 맞혔습니다.
        <br />
        <span>
            {Math.trunc((props.score / props.total) * 100)}점
        </span>
    </div>;
};

export default FinalResults;
