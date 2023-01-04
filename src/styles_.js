import React from "react"

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

export var outDiv_s ={
    display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',
    minHeight:'100vh',
    overflowX:'hidden',
    position:'relative',
}
export var outDiv_1 = {
    width:'100%',
}
export var imgDiv_s = {
    width:'100%',height:'100vh',overflowX:'hidden',
    background:`url(${require('./imges/library_cover.jpg')}), linear-gradient(rgba(100,100,100,0.8),rgba(130,130,130,0.8))`, backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:'cover', backgroundBlendMode:'saturation',
    display:'flex',alignContent:'center',justifyContent:'center',flexWrap:'wrap', flexDirection:'column', alignItems:'center',

}
export var h1_1 = (state=999)=> {
    let width_ = state>768 ? '60%' : '90%'
    return{
    color:'#fff', textAlign:'center',
    margin:'0px 0px 20px 0px',
    width:width_,}
}
export var inDiv_1 = (state=999)=> {
    let width_ = state>1200 ? '60%' : (state > 768) && (state < 1200) ? '80%': '100%'
    return{
    display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'center',flexWrap:'wrap',
    width:width_,
    position:'relative',}
}
export var input_1 =(state=999)=> {
    let width_ = state > 1200 ? '80%' : (state > 768 && state < 1200) ? '70%' : '70%'
    return{
    padding:'6px 16px 8px 16px', width:width_,
    outline:'none',border:'none', background:'rgba(200,200,200,0.8)', borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px',
    fontSize:'38px', fontWeight:'500',}
}
export var btn_1 = {
    position:'relative',
    padding:'10px 18px 12px 12px',
    outline:'none',border:'none', background:'rgba(200,200,200,0.8)', borderTopRightRadius:'20px', borderBottomRightRadius:'20px',
    cursor:'pointer', 
    display:'flex',flexWrap:'wrap', alignItems:'baseline',
}


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

export var outDiv_2 = {
    display:'flex',flexDirection:'row',justifyContent:'center', flexWrap:'wrap', alignItems:'flex-start',
    width:'100%', padding:'2rem'
}


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

export var outDiv_3 = {
    width:'200px', margin:"2rem 2rem",
    display:'flex',flexDirection:'column',flexWrap:'wrap',alignItems:'center',justifyContent:'center',
    cursor:'pointer',
}
export var img_s = {
    width:'100%', height:'312px',
    objectFit:'cover',
    transition:'all ease 350ms',
}
export var inDiv_3 = {
    padding:'8px 0px 0px 0px',width:'100%',
}
export var h3_3 = {
    fontSize:'22px',
    textAlign:'center',
    padding:'4px',
    height:'92px',
    overflowY:'hidden'
}
export var p_3 = {
    textAlign:'center',
    padding:'4px 0px',
    background:'#bbb',
    width:'100%'
}




