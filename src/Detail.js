import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const Detail = (props) => {
    const bucketName = useParams().bucketName;
    console.log(bucketName);

    return (
        <div>
            <div>{bucketName}</div>
        </div>
    );
};
