import { useState, useEffect } from "react";
import GetData from "./api/GetData";
import CommentList from "./CommentList";

const Home = () => {

    const {Data, ErrorMessage, IsLoading} = GetData('http://localhost:8080/data')

    return (
        <div className="home">
          {IsLoading && <div className="loading">Loading....</div>}
          {ErrorMessage && <div className="loading">{ ErrorMessage }</div>}
          {Data && <CommentList commentDatas={Data} titleSection="All Comments"/>}
        </div>
    );
}

export default Home;