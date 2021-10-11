import React from 'react';
import BannerCardStyle from './styles/BannerCardStyle';

export function Banner({item}) {
    return (<BannerCardStyle>
        <div>
            <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
        </div>
    </BannerCardStyle>);
}
