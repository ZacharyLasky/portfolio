import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as styles from "../styles";

export default function Route({ content }) {
  const [textSection, setTextSection] = useState("");
  const [textSectionColor, setTextSectionColor] = useState("");
  const [selectedTextSection, setSelectedTextSection] = useState("");

  useEffect(() => {
    setTextSection(content.text.first);
    setTextSectionColor(content.textSectionColor);
    setSelectedTextSection("one");
  }, [content.text.first, content.textSectionColor]);

  const renderTextSection = (chevron) => {
    if (chevron === "right" && selectedTextSection === "one") {
      setTextSection(content.text.second);
      setSelectedTextSection("two");
      return;
    }

    if (chevron === "right" && selectedTextSection === "two") {
      setTextSection(content.text.third);
      setSelectedTextSection("three");
      return;
    }

    if (chevron === "right" && selectedTextSection === "three") {
      setTextSection(content.text.first);
      setSelectedTextSection("one");
      return;
    }

    if (chevron === "left" && selectedTextSection === "two") {
      setTextSection(content.text.first);
      setSelectedTextSection("one");
      return;
    }

    if (chevron === "left" && selectedTextSection === "three") {
      setTextSection(content.text.second);
      setSelectedTextSection("two");
      return;
    }

    if (chevron === "left" && selectedTextSection === "one") {
      setTextSection(content.text.third);
      setSelectedTextSection("three");
      return;
    }

    setTextSection(content.text.first);
    setSelectedTextSection("one");
  };

  return (
    <ComponentContainer className="component-container">
      <ComponentText className="component-text">{textSection}</ComponentText>
      <ComponentTextSectionIndicatorWrapper className="component-text-section-indicator-wrapper">
        <ComponentTextSectionIndictator
          className="component-text-section-left-arrow"
          onClick={() => renderTextSection("left")}
          color="white"
          style={{
            marginRight: "30px"
          }}
        >
          {"⬅️"}
        </ComponentTextSectionIndictator>
        <ComponentTextSectionIndictator
          className="component-text-section-indicator"
          onClick={() => {
            setTextSection(content.text.first);
            setTextSectionColor(content.textSectionColor);
            setSelectedTextSection("one");
          }}
          color={selectedTextSection === "one" && textSectionColor}
        >
          •
        </ComponentTextSectionIndictator>
        <ComponentTextSectionIndictator
          className="component-text-section-indicator"
          onClick={() => {
            setTextSection(content.text.second);
            setTextSectionColor(content.textSectionColor);
            setSelectedTextSection("two");
          }}
          color={selectedTextSection === "two" && textSectionColor}
        >
          •
        </ComponentTextSectionIndictator>
        <ComponentTextSectionIndictator
          className="component-text-section-indicator"
          onClick={() => {
            setTextSection(content.text.third);
            setTextSectionColor(content.textSectionColor);
            setSelectedTextSection("three");
          }}
          color={selectedTextSection === "three" && textSectionColor}
        >
          •
        </ComponentTextSectionIndictator>
        <ComponentTextSectionIndictator
          className="component-text-section-right-arrow"
          onClick={() => renderTextSection("right")}
          color="white"
          style={{
            marginLeft: "30px"
          }}
        >
          {"➡️"}
        </ComponentTextSectionIndictator>
      </ComponentTextSectionIndicatorWrapper>
      <ComponentImageWrapper className="component-image-wrapper">
        {content.image}
      </ComponentImageWrapper>
    </ComponentContainer>
  );
}

const ComponentContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translateX(200%);
  animation-name: move;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes move {
    from {
      transform: translateX(200%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const ComponentText = styled("div")`
  align-self: flex-start;
  max-width: 600px;
  height: 100px;
  font-size: 20px;
  color: white;
  text-align: left;
  margin: 0 20px;

  @media (min-width: ${styles.tablet}) {
    font-size: 28px;
  }
`;

const ComponentTextSectionIndicatorWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
`;

const ComponentTextSectionIndictator = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 40px;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${styles.tablet}) {
    font-size: 64px;
  }
`;

const ComponentImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  padding-top: 5px;
`;
