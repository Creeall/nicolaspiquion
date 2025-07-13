import styled from 'styled-components';

export const Content = styled.div`
    padding: 20px;
    background-color: #ecf1f4;
    position: relative;
    overflow: hidden;
    flex: 1;
    box-shadow: -7px 0 20px -20px #000000;
    ul {
        list-style: square;
        padding: 0 0 0 2em;

        li {
            color: #333;
        }
    }

    .deco-bottom {
        display: none;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 8em;
        box-shadow: none;
        .deco-bottom {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 140px;
            background: #4a738f;

            &:before {
                content: "";
                position: absolute;
                bottom: 60%;
                transform: translateX(-50%);
                left: 50%;
                width: 130%;
                height: 210px;
                background: #ecf1f4;
                border-radius: 50%;
            }
        }
    }
`;
export const Title = styled.h2`
    color: #4a738f;
    margin-bottom: 30px;
`;
export const Block = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

export const Position = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const SubTitle = styled.h3`
    color: #000;
`;
export const Date = styled.div`
    font-size: 14px;
    color: #4a738f;
    font-weight: bold;
`;


export const Entreprise = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #cc2b2b;
`;
export const Text = styled.div`
    font-size: 16px;
    color: #333;
`;
