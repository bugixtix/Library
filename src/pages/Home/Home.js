import React, { useEffect, useState } from "react";
import { outDiv_s, imgDiv_s, outDiv_1, h1_1, inDiv_1, btn_1, input_1, outDiv_2, outDiv_3, inDiv_3, h3_3, p_3, img_s } from "../../styles_";
import { HiOutlineSearch } from "react-icons/hi"
import axios from 'axios'
// books project is holding up due to the bad APIs that you find on internet nowadays 
//
export const Home = () => {
    let [bookData_$, setBookData_$] = useState([])
    let [newState_$, newSet_$] = useState(false)
    return (
        <div style={ outDiv_s }>
            <Main bookData_$={ bookData_$ } setBookData_$={ (something) => { setBookData_$(something) } } newSet={(something)=>newSet_$(something)}/>
            <Content book={ bookData_$ } new_state={newState_$} />
        </div>
    )
}

//             axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search_$ + '&key=AIzaSyAa1UkRjv3GeFkBH1khGbSB1wNy1moLd7E')
export const Main = (prop) => {
    let window_width = window.innerWidth
    let [width_$, setWidth_$] = useState(window_width)
    let [search_$, setSearch_$] = useState('')
    let serachBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('http://openlibrary.org/search.json?title='+search_$).then((res) => {prop.setBookData_$(res.data); console.log(res.data.docs[0])}).then(()=>{prop.newSet(true)}).catch(error => console.log(error));
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth_$(window.innerWidth)
        })
    }, [width_$])
    return (

        <div style={ outDiv_1 }>
            <div style={ imgDiv_s }>
                <h1 style={ h1_1(width_$) }>“The man who does not read good books is no better than the man who can’t.”</h1>
                <div style={ inDiv_1(width_$) }>
                    <input style={ input_1(width_$) } placeholder='king of something ...' value={ search_$ } onChange={ (e) => setSearch_$(e.target.value) } onKeyDown={ serachBook } />
                    <button style={ btn_1 }>
                        <HiOutlineSearch style={ { padding: '0px', color: '#fff', fontSize: '40px' } } />
                    </button>
                </div>
            </div>
        </div>
    )
}
function checkUrl(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
 }

export const Content = ({ book, new_state }) => {

    let options_ = []
    let [state_$, setState_$] = useState(options_)
    let [ready_$, setReady_$] = useState(false)

    function pickingImgSrc (item){

            // let isbn_0=item.isbn[0]||false 
            // let isbn_1=item.isbn[1]||false 
            // let isbn_2=item.isbn[2]||false 
            // let isbn_3=item.isbn[3]||false 
            // let isbn_4=item.isbn[4]||false
            // let isbn_5=item.isbn[5]||false
            // let olid_=item.olid[0]||false
            // let iccn_=item.iccn[0]||false
            // let oclc_=item.oclc[0]||false
            // let goodreads_=item.id_goodreads[0]||false
            // let default_src ='https://covers.openlibrary.org/b/isbn/9781419140358-L.jpg'
            // return (item.isbn[0] && checkUrl('https://covers.openlibrary.org/b/isbn/'+item.isbn[0]+'-L.jpg')) ? 
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg` : 
            // (item.isbn[1] &&checkUrl(`https://covers.openlibrary.org/b/isbn/${item.isbn[1]}-L.jpg`)) ? 
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[1]}-L.jpg` : 
            // (item.isbn[2] &&checkUrl(`https://covers.openlibrary.org/b/isbn/${item.isbn[2]}-L.jpg`)) ? 
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[2]}-L.jpg` : 
            // (item.isbn[3] &&checkUrl(`https://covers.openlibrary.org/b/isbn/${item.isbn[3]}-L.jpg`)) ?
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[3]}-L.jpg` :
            // (item.isbn[4] &&checkUrl(`https://covers.openlibrary.org/b/isbn/${item.isbn[4]}-L.jpg`)) ? 
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[4]}-L.jpg` : 
            // (item.isbn[5] &&checkUrl(`https://covers.openlibrary.org/b/isbn/${item.isbn[5]}-L.jpg`)) ?
            // `https://covers.openlibrary.org/b/isbn/${item.isbn[5]}-L.jpg` :
            // (item.olid&&checkUrl(`https://covers.openlibrary.org/b/olid/${item.olid}-L.jpg`)) ?
            // `https://covers.openlibrary.org/b/olid/${item.olid}-L.jpg` :
            // (item.iccn&&checkUrl(`https://covers.openlibrary.org/b/iccn/${item.iccn}-L.jpg`)) ?
            // `https://covers.openlibrary.org/b/iccn/${item.iccn}-L.jpg` : 
            // (item.oclc&&checkUrl(`https://covers.openlibrary.org/b/oclc/${item.oclc}-L.jpg`)) ?
            // `https://covers.openlibrary.org/b/oclc/${item.oclc}-L.jpg` :
            // checkUrl(`https://covers.openlibrary.org/b/goodreads/${item.id_goodreads}-L.jpg`) ?
            // `https://covers.openlibrary.org/b/goodreads/${item.id_goodreads}-L.jpg` :
            // default_src
            return item.isbn[0]&&checkUrl('https://covers.openlibrary.org/b/isbn/'+item.isbn[0]+'-L.jpg') ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg` : item.isbn[1]&&checkUrl('https://covers.openlibrary.org/b/isbn/'+item.isbn[1]+'-L.jpg') ? 'https://covers.openlibrary.org/b/isbn/'+item.isbn[1]+'-L.jpg'  
            : 'https://covers.openlibrary.org/b/isbn/9781419140358-L.jpg'
        }
    useEffect(()=>{
        if (new_state)
        {   
            let num_ = book.docs < 6 ? book.docs.length : 6
            for (let i = 0; i< num_ ; i++) {
            options_.push(<Card 
                key={i} 
                title={book.docs[i].title} 
                // imgSrc={'https://covers.openlibrary.org/b/isbn/'+book.docs[i].isbn[0]+'-L.jpg'}
                imgSrc={pickingImgSrc(book.docs[i])}
                />)}
            setReady_$(true)
            setState_$(options_)
        }
    },[new_state,book])
    useEffect(()=>{new_state&&console.log(checkUrl('https://covers.openlibrary.org/b/isbn/'+book.docs[1].isbn[0]+'-L.jpg'))},[book,new_state])
    // console.log(book.docs[0].title)
    return (
        <div style={ outDiv_2 }>
            {state_$}
            {/* <Card title={ 'something' } imgSrc={'https://covers.openlibrary.org/b/oclc/'+'-L.jpg'} /> */}
        </div>
    )
}

export const Card = ({ title, imgSrc, tnB }) => {
    return (
        <div style={ outDiv_3 }>
            <img style={ img_s } src={imgSrc} alt="book cover"></img>
            <div style={ inDiv_3 }>
                <h3 style={ h3_3 }>
                    { title || 'something' }
                </h3>
                <p style={ p_3 }>
                    50&euro;
                </p>
            </div>

        </div>
    )
}
// 