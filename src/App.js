import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
//컴포넌트
import { BucketList } from "./BucketList";
import { Detail } from "./Detail";
import { NotFound } from "./NotFound";

const ContainerWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #eee;
`;

const ListContainer = styled.div`
    width: 50vw;
    max-width: 350px;
    height: 60vh;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;

    h1 {
        color: slateblue;
        text-align: center;
    }

    hr {
        margin: 16px 0px;
        border-color: #fff;
    }
`;

const InputWrap = styled.div`
    width: 50vw;
    max-width: 350px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
`;

function App() {
    const [list, setList] = useState([]);

    const ref = React.useRef(null);

    const addBucket = () => {
        setList([...list, ref.current.value]);
    };

    return (
        <ContainerWrap>
            <ListContainer>
                <h1>내 버킷리스트</h1>
                <hr className="line" />
                <Routes>
                    <Route path="/" element={<BucketList list={list} />} />
                    <Route path="detail/:bucketName" element={<Detail />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </ListContainer>

            <InputWrap>
                <input type="text" ref={ref} />
                <button onClick={addBucket}>추가하기</button>
            </InputWrap>
        </ContainerWrap>
    );
}

export default App;
