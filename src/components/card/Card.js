import React from "react";
import styled from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article, ...)``
 * CSS-in-JS
 */
const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1,
    38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  --webkit-background-clip: text;
  background-clip: text;
`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/15207138/media/bc112a57a4ddf6c577b7771abd9f016f.png?resize=1000x750&vertical=center"></CardImg>
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar src="https://cdn.dribbble.com/users/2400293/screenshots/15207138/media/bc112a57a4ddf6c577b7771abd9f016f.png?resize=1000x750&vertical=center"></UserAvatar>
            <UserName>@zndrson</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
