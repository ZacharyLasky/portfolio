import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as styles from "./styles";
import * as lib from "./lib";
import LandingPage from "./components/LandingPage";
import Component from "./components/Component";

export default function App() {
  const [component, setComponent] = useState();
  const [routeColor, setRouteColor] = useState("");

  useEffect(() => {
    setComponent(<LandingPage />);
    setRouteColor("white");
  }, []);

  return (
    <AppContainer className="app-container">
      {window.innerWidth >= 800 && (
        <>
          <AppRouteWrapper
            className="app-logo-wrapper"
            style={{ alignItems: "flex-start" }}
          >
            <AppRouteDivider
              className="app-logo-divider"
              style={{ marginLeft: "20px" }}
            />
            <a
              href="mailto:zacharylasky123@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <AppRouteSection
                className="app-logo-section"
                onClick={() => {
                  window.location = {};
                  setComponent(<LandingPage />);
                  setRouteColor("white");
                }}
              >
                <AppRoute className="app-route">Email me!</AppRoute>
                <AppRouteSymbol className="app-route-symbol">•</AppRouteSymbol>
              </AppRouteSection>
            </a>
          </AppRouteWrapper>
        </>
      )}
      <AppComponentWrapper className="app-component-wrapper">
        {component}
      </AppComponentWrapper>
      <AppRouteWrapper className="app-route-wrapper">
        <AppRouteSection
          className="app-route-section"
          onClick={() => {
            setComponent(<Component content={lib.missionContent} />);
            setRouteColor("red");
          }}
          routeColor={routeColor === "red" && styles.red}
        >
          <AppRoute className="app-route">Technology</AppRoute>
          <AppRouteSymbol className="app-route-symbol">•</AppRouteSymbol>
        </AppRouteSection>
        <AppRouteDivider className="app-route-divider" />
        <AppRouteSection
          className="app-route-section"
          onClick={() => {
            setComponent(<Component content={lib.purposeContent} />);
            setRouteColor("green");
          }}
          routeColor={routeColor === "green" && styles.green}
        >
          <AppRoute className="app-route">Biography</AppRoute>
          <AppRouteSymbol className="app-route-symbol">•</AppRouteSymbol>
        </AppRouteSection>
        <AppRouteDivider className="app-route-divider" />
        <AppRouteSection
          className="app-route-section"
          onClick={() => {
            setComponent(<Component content={lib.promiseContent} />);
            setRouteColor("yellow");
          }}
          routeColor={routeColor === "yellow" && styles.yellow}
        >
          <AppRoute className="app-route">Connect</AppRoute>
          <AppRouteSymbol className="app-route-symbol">•</AppRouteSymbol>
        </AppRouteSection>
      </AppRouteWrapper>
      <AppEmailWrapper className="app-email-wrapper">
        <AppEmail className="app-email">
          <a
            style={{ color: "lightGray" }}
            href="mailto:zacharylasky123@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            zacharylasky123@gmail.com
          </a>
        </AppEmail>
      </AppEmailWrapper>
    </AppContainer>
  );
}

const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(32, 23, 23, 1) 100%
  );
  height: 100vh;
  font-family: sans-serif;
  overflow: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const AppComponentWrapper = styled("div")`
  height: 3000px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: ${styles.tablet}) {
    margin-top: 60px;
  }
`;

const AppRouteWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AppRouteSection = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  border: 5px solid white;
  border: ${(props) => `5px solid ${props.routeColor}`};
  border-radius: 10%;
  width: 80px;
  height: 40px;

  @media (min-width: ${styles.tablet}) {
    width: 150px;
    height: 75px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const AppRouteDivider = styled("div")`
  border-left: 5px solid white;
  border-right: 5px solid white;
  width: 80px;
  height: 12px;

  @media (min-width: ${styles.tablet}) {
    width: 150px;
    height: 23px;
  }
`;

const AppRoute = styled("div")`
  font-size: 12px;

  @media (min-width: ${styles.tablet}) {
    font-size: 20px;
  }
`;

const AppRouteSymbol = styled(AppRoute)`
  font-size: 40px;

  @media (min-width: ${styles.tablet}) {
    font-size: 64px;
  }
`;

const AppEmailWrapper = styled("div")`
  display: flex;
  height: 250px;
  justify-content: flex-end;
  margin: 0 10px;
  margin-top: 20px;
`;

const AppEmail = styled("div")`
  display: flex;
  align-self: flex-end;
  padding-bottom: 10px;
  font-size: 10px;
  color: lightGray;
  text-align: center;
  white-space: pre-wrap;
  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${styles.tablet}) {
    font-size: 20px;
  }
`;
