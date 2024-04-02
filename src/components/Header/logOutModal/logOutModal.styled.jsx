import styled from 'styled-components';

// LogOutStyles

export const ModalLogOutContainer = styled.div`
    background-color: var(--primary-light);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 592px;
    min-height: 216px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80vh;
    overflow-y: auto;
    gap: 24px;
    padding: 32px 24px 32px 24px;

    @media (max-width: 1439px) {
        max-width: 592px;
    }

    @media (max-width: 767px) {
        max-width: 280px;
        min-height: 280px;
    }

    .logOutDiv1 {
        display: flex;
        flex-wrap: nowrap;
        width: 544px;
        height: 32px;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 767px) {
            max-width: 232px;
        }
    }

    .logOutDiv2 {
        display: flex;
        flex-wrap: nowrap;
        width: 544px;
        height: 32px;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 767px) {
            max-width: 232px;
        }
    }

    .logOutDiv3 {
        display: flex;
        flex-wrap: nowrap;
        width: 544px;
        align-items: center;
        gap: 24px;
        flex-direction: row-reverse;

        @media (max-width: 767px) {
            max-width: 232px;
            flex-direction: column-reverse;
        }
    }

    .logOutP1 {
        margin: 0px;
        font: 500 26px/1.5 'Roboto',
        sans-serif;
    }

    .logOutP2 {
        margin: 0px;
        font: 500 18px/1.5 'Roboto',
        sans-serif;
    }

    .logOutButtonCancel {
        width: 160px;
        height: 44px;
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        font: 500 18px/1.5 'Roboto', sans-serif;
        color: var(--primary-light);
        background: var(--secondary-fifth);
        border: 1px solid transparent;
        border-radius: 10px;
        transition: all 0.1s ease;
        @media (max-width: 767px) {
            width: 100%;
            height: 36px;
        }
    }

    .logOutButtonCancel:hover {
        box-shadow: 0px 4px 14px 0px rgba(215, 227, 255, 0.54);
    }

    .logOutButtonCancel:active {
        background: #becae6;
        box-shadow: 0px 4px 14px 0px rgba(215, 227, 255, 0.54);
        transform: translateY(2px);
    }


    .logOutButtonDelete {
        width: 160px;
        height: 44px;
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        font: 500 18px/1.5 'Roboto', sans-serif;
        color: var(--primary-light);
        background: var(--secondary-second);
        border: 1px solid transparent;
        border-radius: 10px;
        transition: all 0.1s ease;

        @media (max-width: 767px) {
            max-width: 232px;
            max-height: 36px;
        }
    }

    .logOutButtonDelete:hover {
        box-shadow: 0px 4px 14px 0px rgba(239, 80, 80, 0.54);
    }

    .logOutButtonDelete:active {
        background: #d63636;
        box-shadow: 0px 2px 8px 0px rgba(239, 80, 80, 0.54);
        transform: translateY(2px);
    }

    .xMarkWrapper {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    .xMarkWrapper:hover {
        border-bottom: 1px solid var(--primary-focus);
    }
`;
