import styled from 'styled-components';

export const TeamButton = styled.button`
  @media screen and (max-width: 767px) {
    height: 36px;
    width: 280px;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    height: 44px;
    width: 336px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin: auto;

    height: 44px;
    width: 384px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: none;
    background: var(--primary-focus);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    color: var(--primary-light);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const ModalTeamOverlay = styled.div`
  @media screen and (max-width: 767px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 12px 6px;
    width: 280px;
    max-height: 627px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 24px 12px;
    width: 700px;
    height: 550px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    background-color: var(--primary-light);
    position: relative;
    border-radius: 10px;
    padding: 24px 12px;
    width: 1000px;
    height: 750px;
    color: var(--primary-dark);
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonOverlay = styled.button`
  @media screen and (max-width: 767px) {
    border: none;
    background-color: transparent;
    position: absolute;

    top: 10px;
    right: 15px;
    svg {
      width: 16px;
      height: 16px;
      stroke: var(--primary-focus);
    }
  }

  @media screen and (min-width: 768px) {
    border: none;
    background-color: transparent;
    position: absolute;

    top: 20px;
    right: 10px;
    svg {
      width: 16px;
      height: 16px;
      stroke: var(--primary-focus);
    }
  }

  @media screen and (min-width: 1440px) {
    border: none;
    background-color: transparent;
    position: absolute;

    top: 30px;
    right: 16px;
    svg {
      width: 24px;
      height: 24px;
      stroke: var(--primary-focus);
    }
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 155px;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

export const ContainerTeam = styled.div`
  @media screen and (max-width: 767px) {
    padding: 5px 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 15px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 20px;
  }
`;

export const ContainerListTeam = styled.li`
  @media screen and (max-width: 767px) {
    width: 100px;
    display: grid;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 165px;
    display: grid;
    justify-self: center;
  }
  @media screen and (min-width: 1440px) {
    max-width: 165px;
    display: grid;
    justify-self: center;
  }
`;

export const ListTeam = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px 10px;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 10px;
    list-style: none;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 20px;
    list-style: none;
  }
`;

export const TitleTeam = styled.h3`
  @media screen and (max-width: 767px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 14px;
    font-style: bold;
    font-weight: 500;
    line-height: 1;

    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    justify-content: space-around;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export const SubtitleTeam = styled.p`
  @media screen and (max-width: 767px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;

    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    color: var(--primary-dark);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    justify-content: space-around;
  }
`;

export const IconList = styled.ul`
  @media screen and (max-width: 767px) {
    display: flex;

    gap: 6px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

export const IconTeam = styled.li`
  @media screen and (max-width: 767px) {
    svg {
      width: 15px;
      height: 15px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;
      stroke-width: 1;
      stroke: var(--primary-light);
      fill: var(--primary-focus);
    }
  }
`;

export const IconTeamGithub = styled.li`
  @media screen and (max-width: 767px) {
    svg {
      width: 15px;
      height: 15px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 35px;
      height: 30px;

      stroke: var(--primary-dark);
      fill: var(--primary-dark);
    }
  }
`;
