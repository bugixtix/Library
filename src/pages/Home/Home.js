import React, { useEffect, useState } from "react";
import { outDiv_s, imgDiv_s, outDiv_1, h1_1, inDiv_1, btn_1, input_1, outDiv_2, outDiv_3, inDiv_3, h3_3, p_3, img_s } from "../../styles_";
import { HiOutlineSearch } from "react-icons/hi"
import axios from 'axios'

export const Home = () => {
    let [bookData_$, setBookData_$] = useState([])
    return (
        <div style={ outDiv_s }>
            <Main bookData_$={ bookData_$ } setBookData_$={ (something) => { setBookData_$(something) } } />
            <Content book={ bookData_$ } />
        </div>
    )
}

export const Main = (prop) => {
    let window_width = window.innerWidth
    let [width_$, setWidth_$] = useState(window_width)
    let [search_$, setSearch_$] = useState('')
    let serachBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search_$ + '&key=AIzaSyAa1UkRjv3GeFkBH1khGbSB1wNy1moLd7E').then(res => prop.setBookData_$(res.data.items)).catch(error => console.log(error))
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

export const Content = ({ book }) => {
    console.log(book)
    return (
        <div style={ outDiv_2 }>

            {/* { book.length != 0 && book.map((item, index) => {
            let title_ = item.volumeInfo.title
            let thumbnail_Bo = item.volumeInfo.imageLinks
            let thumbnail_ = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
            return <Card key={ index } title={ title_} imgSrc={thumbnail_} tnB={thumbnail_Bo}/>
        }) } */}
            <Card title={ 'something' } />
        </div>
    )
}

export const Card = ({ title, imgSrc, tnB }) => {
    let [state_$, setState_$] = useState('')
    async function tryIt (){
        const response = await axios('http://books.google.com/books/content?id=njFuEAAAQBAJ&printsec=frontcover&img=1&zoom=5',{headers:{'Access-Control-Allow-Origin':'http://localhost:3000'}})
        if(!response.ok){throw new Error('errror'+response.status)}
        const result = await response.json()
        setState_$(result)
    }
    tryIt()
    // let data_ = fetch('http://books.google.com/books/content?id=njFuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api').then(res => res.json()).then(data => data).catch(error=>console.log('erorr'+error))
    // useEffect(() => {
    // }, [])
    return (
        <div style={ outDiv_3 }>
            <img style={ img_s } src={state_$} alt="book cover"></img>
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