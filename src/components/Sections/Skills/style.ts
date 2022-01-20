import styled from "styled-components";

export const SectionSkills = styled.section`
  margin: 10rem 0;
  height: 40rem;

  & .cont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .cont h2 {
    position: relative;
    font-size: 4rem;
  }

  & .cont h2::before {
    content: "";
    height: 1.7rem;
    display: block;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.background_three};
    position: absolute;
    bottom: 2px;
    z-index: -1;
  }

  & .cont p {
    font-size: 1.6rem;
    margin-top: 1rem;
    line-height: 4rem;
  }

  & .cont .techs {
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    margin-top: 5rem;
    transform: translateX(-80px);
  }

  & .cont .techs .tech {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 100%;
    background: ${(props) => props.theme.colors.bakground_secundary};
    border-radius: 0.8rem;
  }

  & .cont .techs .tech svg {
    transition: all 0.2s ease;
  }

  & .cont .techs .tech:nth-child(1) {
    transform: translate(-40%, 40%);
  }

  & .cont .techs .tech:nth-child(2) {
    transform: translate(0px, -5rem);
  }

  & .cont .techs .tech:nth-child(3) {
    transform: translate(40%, 40%);
  }

  & .cont .techs .tech:nth-child(4) {
    transform: translate(-40%, 70%);
  }

  & .cont .techs .tech:nth-child(5) {
    transform: translate(0px, 10%);
  }

  & .cont .techs .tech:nth-child(6) {
    transform: translate(40%, 70%);
  }

  & .cont .techs .tech:nth-child(7) {
    transform: translate(100%, 70%);
  }

  & .cont .techs .tech svg {
    color: gray;
    font-size: 4rem;
  }
`;
