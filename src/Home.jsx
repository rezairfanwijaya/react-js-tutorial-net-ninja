import { useState, useEffect } from "react";
import GetData from "./api/GetData";
import CommentList from "./CommentList";
import Tags from "./Tags";

const Home = () => {

  // const { Data, ErrorMessage, IsLoading } = GetData('http://localhost:8080/data')

  return (
    <>
      <Tags />
      <div className="home">
        <h2 style={{ 
          color: "white",
          textAlign : "center"
         }}>Welcome Home</h2>
      </div>
    </>
  );
}

export default Home;