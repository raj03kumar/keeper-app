import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "./Notes"

export default function App(){
    return (
        <div>
            <Header/>

            {notes.map(note=>(<Note 
                key={note.key}
                title={note.title} 
                first={note.first}
                second={note.second}
                third={note.third} />))
            }    

            <Footer/>
        </div>
    )
}