import React from 'react';
import { SocialNetworkButton } from '../Buttons/SocialNetworkButton';
import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <ul className='social-networks-list'>
                <li>
                    {/* <SocialNetworkButton text={'Facebook'} /> */}
                    {/* <a href="https://www.facebook.com/carlos19997" target="_blank" class="fa fa-facebook" rel="noreferrer"></a> */}
                    <SocialNetworkButton icon='fa fa-facebook' url='https://www.facebook.com/carlos19997' />
                </li>
                <li>
                    {/* <SocialNetworkButton text={'Twitter'} /> */}
                    {/* <a href="https://twitter.com/villa__salas" target="_blank" class="fa fa-twitter" rel="noreferrer"></a> */}
                    <SocialNetworkButton icon='fa fa-twitter' url='https://twitter.com/villa__salas' />
                </li>
                <li>
                    {/* <SocialNetworkButton text={'Linkedin'} /> */}
                    {/* <a href="https://www.linkedin.com/in/carlos-villalobos-salas/" target="_blank" class="fa fa-linkedin" rel="noreferrer"></a> */}
                    <SocialNetworkButton icon='fa fa-linkedin' url='https://www.linkedin.com/in/carlos-villalobos-salas/' />
                </li>
                <li>
                    {/* <SocialNetworkButton text={'Instagram'} /> */}
                    {/* <a href="https://www.instagram.com/carlooss_villa/" target="_blank" class="fa fa-instagram" rel="noreferrer"></a> */}
                    <SocialNetworkButton icon='fa fa-instagram' url='https://www.instagram.com/carlooss_villa/' />
                </li>
                <li>
                    {/* <SocialNetworkButton text={'Email'} /> */}
                    <button className='email-button'>
                        {/* <a href="#" class="fa fa-google"></a> */}
                        G
                    </button>
                </li>
            </ul>
        </div>
    )
}
