import styled from 'styled-components';

const StyledMenu = styled.div`
    min-width: 30vh;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;

    background: #fff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
        0px 3px 5px rgba(0, 0, 0, 0.2);

    transform: ${(props) => (props.open ? '' : 'translateX(-100%)')};
    z-index: 2;
    transition: all 0.5s;
    display: none;

    span {
        font-size: 18px;
    }

    @media (max-width: 992px) {
        display: flex;
    }
    flex-direction: column;
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 8px;
    padding: 0px 50px;

    div {
        width: fit-content;
    }

    & div:last-of-type {
        width: 100%;
        margin: 16px 0px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 40px 32px;
`;

export { StyledMenu, LogoContainer, BtnContainer };
