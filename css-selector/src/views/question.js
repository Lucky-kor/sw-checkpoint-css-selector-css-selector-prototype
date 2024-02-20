import React from 'react';
import './question.css';

const Question = (props) => {
    const answer = '';
    const yesORno = ['yes', 'no'];

    const answerChecked = (e) => {
        let a = e.target.value;
        props.answered(a);
        a = '';
    };
    const displaySelector = () => {
        return `${props.q} {…}`;
    };

    const isChecked = (item) => {
        return item === props.v[0];
    };
    const checkedClass = (item) => {
        return isChecked(item) ? 'checked' : 'not-checked';
    };
    const isCorrectChecked = (item) => {
        return item === props.v[0] && item === props.correct;
    };
    const feedbackClass = (item) => {
        if (!props.disabled) {
            return;
        }
        return item === props.correct ? 'correct' : 'wrong';
    };

    return (
        <>
            <pre className='code'>
                <div className="pre-bar">
                    질문 {props.currentIndex + 1}
                    <div className='pre-fakeButton'>
                        <span>＋</span>
                        <span>-</span>
                        <span>×</span>
                    </div>
                </div>
                <span className='pre-string'>현재 표시된 셀렉터는<br /><p>{props.q}</p>의 범위인가요?</span> <br />
                <div className='pre-displaySelector'>{displaySelector()}<br /></div>
                <div className="pre-description">{props.disabled ? `${props.description}` : ''}</div>
            </pre>
            <div
                className={`${props.disabled ? 'label-ctnr disabled' : 'label-ctnr'
                    }`}
            >
                {yesORno.map((item) => {
                    return (
                        <label
                            key={item}
                            className={`${feedbackClass(item)} ${checkedClass(
                                item
                            )}`}
                        >
                            {props.disabled && isChecked(item) ? (
                                <>
                                    <span>
                                        {isCorrectChecked(item) ? (
                                            <>
                                                <svg
                                                    version='1.1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 130.2 130.2'
                                                >
                                                    <polyline
                                                        className='path check'
                                                        fill='none'
                                                        stroke='#3ca70e'
                                                        strokeWidth='20'
                                                        strokeLinecap='round'
                                                        strokeMiterlimit='20'
                                                        points='100.2,40.2 51.5,88.8 29.8,67.5 '
                                                    />
                                                </svg>
                                            </>
                                        ) : (
                                                <>
                                                    <svg
                                                        version='1.1'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 130.2 130.2'
                                                    >
                                                        <line
                                                            className='path line'
                                                            fill='none'
                                                            stroke='#c12d13'
                                                            strokeWidth='20'
                                                            strokeLinecap='round'
                                                            strokeMiterlimit='10'
                                                            x1='34.4'
                                                            y1='37.9'
                                                            x2='95.8'
                                                            y2='92.3'
                                                        />
                                                        <line
                                                            className='path line'
                                                            fill='none'
                                                            stroke='#c12d13'
                                                            strokeWidth='20'
                                                            strokeLinecap='round'
                                                            strokeMiterlimit='10'
                                                            x1='95.8'
                                                            y1='38'
                                                            x2='34.4'
                                                            y2='92.2'
                                                        />
                                                    </svg>
                                                </>
                                            )}
                                    </span>
                                </>
                            ) : (
                                    <>
                                        <input
                                            onChange={answerChecked}
                                            value={item}
                                            id={item}
                                            type='radio'
                                            disabled={props.disabled}
                                        />
                                    </>
                                )}
                            {item}
                        </label>
                    );
                })}
                {answer ? (
                    <>
                        <button onClick={props.submit}></button>
                    </>
                ) : (
                        <></>
                    )}
            </div>
        </>
    );
};

export default Question;
