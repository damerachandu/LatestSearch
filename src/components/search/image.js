import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    list,
    shouldShowImage
}) => {
    const image = list.searchImage && list.searchImage.replace('/docs', '').replace(/<[^>]+>/g, '');

    return shouldShowImage && list.searchImage ? <div className='image-holder col-xs-24 col-sm-8 col-lg-6'>
        <div className='pic-wrapper'>
            <a
                href={list.url}
                target='_self'
            >
                <img src={image}/>
            </a>
        </div>
    </div>
        : null;
};

Image.propTypes = {
    list: PropTypes.object,
    shouldShowImage: PropTypes.bool
};

export default Image;

