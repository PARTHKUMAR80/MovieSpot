import React from 'react'

export default function Result({result,openPopup}) {
    return (
        <div className="result" onClick={()=>openPopup(result.imdbID)}>
            <img src={result.Poster}/>
            <h3 className="title">{result.Title}</h3>
            <h3 className="title2">{result.Year}</h3>
        </div>
    )
}
