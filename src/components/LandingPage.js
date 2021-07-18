import React from "react";
import styled from "styled-components";
import * as styles from "../styles";
import * as assets from "../assets";

export default function LandingPage() {
  return (
    <LandingPageContainer className="landing-page-container">
      <LandingPageHeadingWrapper className="landing-page-heading-wrapper">
        <LandingPageHeading className="landing-page-heading">
          Zachary
        </LandingPageHeading>
        <LandingPageHeadingTwo className="landing-page-heading-two">
          Daniel
        </LandingPageHeadingTwo>
        <LandingPageHeadingThree className="landing-page-heading-three">
          Lasky
        </LandingPageHeadingThree>
      </LandingPageHeadingWrapper>
      <LandingPageSubheading className="landing-page-subheading">
        Software Engineer
      </LandingPageSubheading>
      {window.innerWidth < 800 && (
        <LandingPageLogoWrapper className="landing-page-logo-wrapper">
          <LandingPageLogo
            className="landing-page-logo"
            src={assets.logo}
            alt="landing-page-logo"
          />
        </LandingPageLogoWrapper>
      )}
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const LandingPageHeadingWrapper = styled("div")`
  display: flex;
  flex-direction: row;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
`;

const LandingPageHeading = styled("h1")`
  color: white;
  font-size: 5vw;
  font-weight: normal;
  margin: 0 auto;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-fill-mode: forwards;
`;

const LandingPageHeadingTwo = styled(LandingPageHeading)`
  padding-left: 1vw;
  animation-delay: 1s;
`;

const LandingPageHeadingThree = styled(LandingPageHeadingTwo)`
  animation-delay: 2s;
`;

const LandingPageSubheading = styled("h2")`
  color: ${styles.green};
  font-size: 8vw;
  margin: 0 auto;
  padding: 30px 0 0 0;
  transform: translateX(-200%);
  animation-name: move;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;

  @keyframes move {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const LandingPageLogoWrapper = styled("div")`
  margin-top: 50px;
  border: 5px solid white;
  border-radius: 10%;
`;

const LandingPageLogo = styled("img")`
  width: 130px;
  height: 130px;
`;
