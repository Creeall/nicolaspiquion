import styled from 'styled-components';

export const Content = styled.div`
    padding: 20px;
    background-color: #fff;
    flex: 1;
    ul {
        list-style: square;
        padding: 0 0 0 2em;
        li {
            color: #333;
        }
    }
`;
export const Title = styled.h2`
    color: #4a738f;
    margin-bottom: 30px;
`;
export const SubTitle = styled.h3`
    color: #000;
`;
export const Block = styled.div`
    margin-bottom: 20px;
    position: relative;
`;
export const Date = styled.span`
    font-size: 14px;
    color: #787878;
    position: absolute;
    top: 6px;
    right: 0;
    font-weight: bold;
`;
export const Position = styled.h3`
    color: #000;
`;
export const Entreprise = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #4a738f;
`;
export const Text = styled.div`
    font-size: 16px;
    color: #333;
`;
