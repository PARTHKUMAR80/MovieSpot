import React from 'react'
import Collection from './Collection'
export default function Results({results,openPopup}) {
    return (
        <section className="results">
            {results.map(result=>(
                <Collection key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
    )
}
