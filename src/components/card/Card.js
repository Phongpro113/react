import React from 'react';
import styled from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article, ...)``
 * CSS-in-JS
 */
const Card = () => {
    return (
        <div>
            {/* <img src="https://cdn.dribbble.com/users/2400293/screenshots/15207138/media/bc112a57a4ddf6c577b7771abd9f016f.png?resize=1000x750&vertical=center">

            </img> */}
            <div>
                <div>
                    <div>
                        <img src="https://cdn.dribbble.com/users/2400293/screenshots/15207138/media/bc112a57a4ddf6c577b7771abd9f016f.png?resize=1000x750&vertical=center"></img>
                        <span>@zndrson</span>
                    </div>
                    <div>256</div>
                </div>
                <div>
                    <h3>Cosmic Perspective</h3>
                    <span>12,000 PSL</span>
                </div>
            </div>
        </div>
    );
};

export default Card;