import React, { useState, useEffect } from "react";
import './index.less'
const Home = () =>{
    const [formType,setFormType] = useState(false);
    useEffect(()=>{

    },[])
    return (
        <div className="home">
            <h2>欢迎访问 xxx 停车系统</h2>
            <div className="form">

            </div>
        </div>
    )
}
export default Home;