import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

export default function App(){
    return (
        <div>
            <Header/>

            {/* We can also make a notes.js file and make a const array to store these values. Note we have to export it and import it here to use. But we have much better way of doing using map and filer */}

            <Note title="To Do" first="Gym" second="Study" third="Sleep"/>
            <Note title="To Learn" first="App Dev" second="Web Dev" third="ML"/>
            <Note title="To Play" first="BasketBall" second="Chess" third="Cricket"/>
            <Note title="To Watch" first="Kdrama" second="Marvel" third="DC"/>
            <Note title="To Eat" first="Noodles" second="Pizza" third="Wafers"/>
            <Note title="To Read" first="Self-Help Books" second="Business Books" third="Trading Books"/>
            <Note title="To Buy" first="Books" second="Protein Shake" third="Clothes"/>
            
            <Footer/>
        </div>
    )
}