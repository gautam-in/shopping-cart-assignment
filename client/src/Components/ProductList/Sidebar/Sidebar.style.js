import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 25%;
    background: #eaeaea;
    padding: 10px;
    position: sticky;
    top: 88px;
    height: 100vh;

    .sidebar_item {
        padding: 10px;
        color: #676767;
        border-bottom: 1px solid #d0d0d0;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const SidebarMobileWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        .ant-select-selector {
            background: #be2857 !important;
            margin: 10px 0 !important;
            border: none !important;
        }
        .ant-select-arrow {
            color: white !important;
            font-size: 20px;
        }
    }
`