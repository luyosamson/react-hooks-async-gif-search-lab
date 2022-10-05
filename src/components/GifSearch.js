import React,{useState} from "react";

function GifSearch({onSearch}){


    const [searchTerm,setSearchTerm]=useState('')

    function handleSubmission(e){
        e.preventDefault()
        
        onSearch(searchTerm)
    
    }
       

     function handleSearch(event){

        setSearchTerm(event.target.value)
       
     }
    return(
        <div>
                <form onSubmit={handleSubmission}>
                    <label>SEARCH GIF</label>
                    <input type="text" value={searchTerm} onChange={handleSearch}  placeholder="Enter name of GYPHY to search"></input>
                    <input type="submit" ></input>



                </form>
        </div>

    )

}
export default GifSearch;