import React from "react";
import { outDiv_s , imgDiv_s, outDiv_1, h1_1, inDiv_1, btn_1, input_1,outDiv_2, outDiv_3,inDiv_3,h3_3,p_3,img_s} from "../../styles_";
import {HiOutlineSearch} from "react-icons/hi"

export const Home = () => {
    return(
        <div style={outDiv_s}>
            <Main/>
            <Content/>
        </div>
    )
}

export const Main = () => {

    return (

        <div style={outDiv_1}>
            <div style={imgDiv_s}>
                <h1 style={h1_1}>“The man who does not read good books is no better than the man who can’t.”</h1>
                <div style={inDiv_1}>
                    <input style={input_1} placeholder='king of something ...'/>
                    <button style={btn_1}>
                        <HiOutlineSearch style={{padding:'0px',color:'#fff', fontSize:'40px'}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Content = () => {
    
    return(
        <div style={outDiv_2}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export const Card = () => {

    return(
        <div style={outDiv_3}>
            <img style={img_s} src={require('../../imges/book_cover.jpg')} alt="book cover"></img>
            <div style={inDiv_3}>
                <h3 style={h3_3}>
                    Reactjs
                </h3>
                <p style={p_3}>
                  50&euro;
                </p>
            </div>
            
        </div>
    )
}