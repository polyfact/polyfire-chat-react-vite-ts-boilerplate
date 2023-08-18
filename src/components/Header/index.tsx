import styled from "styled-components";

interface HeaderProps {
  title: string;
  logo?: string;
  bgColor?: string;
  textColor?: string;
}

const StyledHeader = styled.header<Omit<HeaderProps, "title">>`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "#1a1a2e"};
  color: ${(props) => props.textColor || "#e94560"};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    height: 50px;
    width: auto;
    margin-right: 1rem;
  }

  & > h1 {
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export function Header({
  title,
  bgColor,
  textColor,
  logo = "./logo.svg",
}: HeaderProps) {
  return (
    <StyledHeader bgColor={bgColor} textColor={textColor}>
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} alt={`Logo of ${title}`} />
          <h1>{title}</h1>
        </LogoContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
