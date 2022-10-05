import React from "react";

function GifList({myGif}){


return(
<ul>
{myGif?.map(({url},index)=>(
    <li key={index}>
        <img src={url} alt='GIF'></img>

    </li>


))}
</ul>
);

}
export default GifList;