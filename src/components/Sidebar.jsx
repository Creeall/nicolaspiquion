import styled from 'styled-components';

export const Sidebar = styled.div`
    background-color: #e5ecf1;
    max-width: 380px;
    min-height: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    padding-bottom: 5rem;
   
    .deco-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background: #4a738f;
        &:before{
            content: "";
            position: absolute;
            bottom: -50%;
            transform: translateX(-50%);
            left: 50%;
            width: 130%;
            height: 210px;
            background: #4a738f;
            border-radius: 50%;
        }
    }
    .deco-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: #4a738f;
        
        &:before{
            content: "";
            position: absolute;
            bottom: 50%;
            transform: translateX(-50%);
            left: 50%;
            width: 130%;
            height: 210px;
            background: #e5ecf1;
            border-radius: 50%;
        }
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding-bottom: 1rem;
        box-shadow:  0 -29px 20px 20px #000;
        .deco-top {
            height: 10%;
            &:before {
                height: 50vw;
            }
        }
        .deco-bottom {
            display: none;
        }
    }
`;
export const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 20px 0 0 0;
`;

export const SidebarTitle = styled.h1`
    font-size: 24px;
    margin: 0;
    color: #fff;
    line-height: 2.2;
`;
export const SidebarSubTitle = styled.p`
    font-size: 18px;
    margin: 0;
    color: #fff;
    font-weight: 300;
    margin-bottom: 20px;
    
`;
export const SidebarImage = styled.img`
    display: block;
    border-radius: 50%;
    border: 8px solid #fff;
    height: auto;
    width: 68%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        max-width: 250px;
    }
`;

export const SidebarContent = styled.div`
    padding: 20px;
    position: relative;
    z-index: 2;

    h2 {

        line-height: 1.1;
        padding-bottom: 0.4em;

        &:not(:first-child) {
            margin-top: 1em;
        }
    }

    ul {
        margin-top: 2em;
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #333;
            font-weight: 400;
            padding: 0.5em 0;

            &:not(:last-child) {
                border-bottom: 1px dotted #afc1cd;
            }

            a {
                color: #4a738f;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }

            svg {
                margin-right: 20px;
                color: #4a738f;
                transform: scale(1.4);
            }
        }
    }
`;
