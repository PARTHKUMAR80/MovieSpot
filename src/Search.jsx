import React from 'react'

export default function Search({handleInput,search}) {
    return (
        <section className="searchbox">
            <input type="text" placeholder="Search for a movie..." className="input" onChange={handleInput} onKeyPress={search}/>
        </section>
    )
}
