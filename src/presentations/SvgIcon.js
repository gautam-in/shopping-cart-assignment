import React from 'react';

export default function SvgIcon(props) {
    /* Because of React warning message >
	"Unknown prop `glyph` on <svg> tag"
	*/
    const svgProps = Object.assign({}, props);
    delete svgProps.glyph;
    return (
        <svg {...svgProps}>
            <use xlinkHref={props.glyph} />
        </svg>
    );
}
