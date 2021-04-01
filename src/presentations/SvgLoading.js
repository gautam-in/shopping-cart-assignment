import React from 'react';
import constants from '../constants';

export default function SvgLoading(props) {
    return (
        <div>
            <svg
                width="72px"
                height="72px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="uil-ring"
            >
                <rect x="0" y="0" width="100" height="100" fill="none" className="bk" />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeDasharray="183.7831702350029 98.96016858807849"
                    stroke={constants.COLORS.SCARLET}
                    fill="none"
                    strokeWidth="10"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 50 50;180 50 50;360 50 50;"
                        keyTimes="0;0.5;1"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0s"
                    />
                </circle>
            </svg>
            <p className="bazar-theme-color" style={{ marginTop: '0.7em' }}>
                Loading
            </p>
        </div>
    );
}
