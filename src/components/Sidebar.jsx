import styled from 'styled-components';

export const Sidebar = styled.div`
    background-color: #4a738f;
    max-width: 380px;
    min-height: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    padding-bottom: 5rem;
    &:before {
        content: "";
        position: absolute;
        width: 90rem;
        height: 90rem;
        z-index: 0;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e9eef3' /%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
    &:before {
        content: "";
        position: absolute;
        width: 50rem;
        height: 50rem;
        z-index: 0;
        top: -35rem;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234a738f' /%3E%3C/svg%3E");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const SidebarTitle = styled.h1`
    font-size: 24px;
    margin: 0;
    color: #fff;
    z-index: 1;
    line-height: 2.2;
`;
export const SidebarSubTitle = styled.p`
    font-size: 18px;
    margin: 0;
    color: #fff;
    z-index: 1;
    font-weight: 300;
    margin-bottom: 20px;
    
`;
export const SidebarImage = styled.img`
    display: block;
    border-radius: 50%;
    border: 8px solid #fff;
    height: auto;
    width: 60%;
    margin: 0 auto;
    z-index: 1;
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
