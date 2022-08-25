import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const NotFound = (props) => {
    // React.useEffect(() => {
    //     setTimeout();
    // }, []);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <h1>주소가 올바르지 않습니다.</h1>
            <button
                onClick={() => {
                    navigate("/", { replace: true });
                }}
            >
                메인으로 이동
            </button>
        </React.Fragment>
    );
};
