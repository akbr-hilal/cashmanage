import * as React from 'react';

interface ICardReviewProps {
    id: number,
    user: string,
    review: string
}

const CardReview: React.FunctionComponent<ICardReviewProps> = (props) => {
    return (
        <div className='block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-4' key={props.id}>
            <h5
                className="mb-2 font-light leading-tight italic ">
                "{props.review}"
            </h5>
            <p className='font-semibold'>{props.user}</p>
        </div>
    );
};

export default CardReview;
