import React from 'react';
import BannerCardStyle from './styles/BannerCardStyle';

export function Banner({item}) {
    return (<BannerCardStyle>
        <div>
            <img loading="lazy" src={item.bannerImageUrl} alt={item.bannerImageAlt} />
        </div>
    </BannerCardStyle>);
}
