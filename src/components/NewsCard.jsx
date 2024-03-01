import React from 'react';

const NewsCard = (props) => {
    return (
        <a href={props.link} className='my-4' target='_blank'>
            <div className="block max-w-full min-h-full mx-4 p-6 border border-gray-200 rounded-lg shadow  mb-8 bg-[#014558]">
                <h5 className="mb-2 text-2xl text-white font-semibold tracking-tight">{props.title}</h5>
                <p className="font-normal text-white">{props.description}</p>
            </div>
        </a>
    );
};
export default NewsCard;
