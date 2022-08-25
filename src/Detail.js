import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

export const Detail = (props) => {
    const bucketName = useParams().bucketName;
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div>{bucketName}</div>
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                돌아가기
            </button>
        </React.Fragment>
    );
};
