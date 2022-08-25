import React from "react";
import styled from "styled-components";

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
                return <ListItem key={index}>{list}</ListItem>;
            })}
        </div>
    );
};
