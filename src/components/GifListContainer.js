import React,{useEffect,useState} from "react";
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer(){

    const [mySearch,setMysearch]=useState('dog')
    const [gif,setGif]=useState([])

    useEffect(()=>{

        fetch(`https://api.giphy.com/v1/gifs/search?q=${mySearch}&api_key=KztI1H2rp4PdZrggx1Ix6bJvW8eHh6A1&rating=g`)
        .then((resp)=>{
            return resp.json()
           
        })
        .then(({data})=>{
        
        const newItem=data?.slice(0,3).map((gif)=>{
            return {url:gif.images.original.url}
             
        })
            setGif(newItem)
        

        })
        
    },[mySearch]
    )
const searchGif=(searchInput)=>{
setMysearch(searchInput)

}
    return(
        <div>
               <GifSearch onSearch={searchGif} />
                <GifList myGif={gif} />
             
        </div>


    )
}
export default GifListContainer