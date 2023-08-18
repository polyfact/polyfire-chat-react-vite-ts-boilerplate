import styled from "styled-components";
import { Copyright } from "phosphor-react";

interface FooterProps {
  name: string;
  bgColor?: string;
  textColor?: string;
}

const StyledFooter = styled.footer<Omit<FooterProps, "name">>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: ${(props) => props.bgColor || "#333"};
  color: ${(props) => props.textColor || "#fff"};
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
`;

const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & > svg {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

export function Footer({ name, bgColor, textColor }: FooterProps) {
  return (
    <StyledFooter bgColor={bgColor} textColor={textColor}>
      <StyledParagraph>
        <Copyright size={24} weight="bold" />
        Copyright 2023 {name}
      </StyledParagraph>
      <p>All rights reserved</p>
    </StyledFooter>
  );
}
