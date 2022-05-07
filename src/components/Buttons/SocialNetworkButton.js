import React from 'react';
import './Buttons.css';

export const SocialNetworkButton = ({ url, icon }) => {
    return (
        <a
            className={icon}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
        </a>
    )
}
