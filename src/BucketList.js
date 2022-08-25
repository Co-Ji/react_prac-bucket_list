import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
`;

export const BucketList = ({ list }) => {
    const my_lists = list;

    return (
        <div>
            {my_lists.map((list, index) => {
                return (
                    <Link
                        to={`detail/${list}`}
                        style={{ textDecoration: "none", color: "green" }}
                    >
                        <ListItem key={index}>{list}</ListItem>
                    </Link>
                );
            })}
        </div>
    );
};
