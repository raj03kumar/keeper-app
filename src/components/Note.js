import React from "react"

export default function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>
                <ul>
                    <li>{props.first}</li>
                    <li>{props.second}</li>
                    <li>{props.third}</li>
                </ul>
            </p>
        </div>
    )
}