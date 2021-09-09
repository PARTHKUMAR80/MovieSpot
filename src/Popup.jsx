import React from 'react'

export default function Popup({pop,closedPopup}) {
    return (
        <div className="main-div">
            <h2 className="pop-title">{pop.Title}</h2>
            <h3 className="pop-year">{pop.Year}</h3>
            <h3 className="pop-rating">Rating:{pop.imdbRating}</h3>
            <div className="pop-image-div">
                <div className="img-div-main">
                  <img src={pop.Poster} alt="Image" className="pop-image"/>
                </div>
                <p className="pop-plot">{pop.Plot}</p>
            </div>
            <button onClick={closedPopup}>Close</button>
        </div>
    )
}
