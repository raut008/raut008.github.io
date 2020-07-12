import styled from "styled-components";

export const LoadingStyle = styled.div`
    text-align: center;
`;

export const ProgressBar = styled.div`
    position: relative;
    width: 140px;
    height: 3px;
    background: #cfcfcf;
    margin-top: 20px;
    overflow: hidden;
    ::before{
        content: '';
        width: 70px;
        height: 2px;
        background: #0073b1;
        position: absolute;
        left: -34px;
        animation: bluebar 1.4s infinite ease;
    }

    @keyframes bluebar{
        50%{
            left: 95px;
        }
    }
`;
