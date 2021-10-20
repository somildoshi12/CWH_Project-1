import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {
        let txt = document.getElementById('my-box');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }

    return (
        <div>
            <div className="container">

                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>

                <div className="mb-3">

                    <textarea className="form-control" id="my-box" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#432626' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '2px solid white' : '2px solid black' }}></textarea>

                </div>

                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} disabled={text.length===0} ><b>To UpperCase</b></button>

                <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} disabled={text.length===0} ><b>To lowerCase</b></button>

                <button className="btn btn-primary my-2 mx-1" onClick={handleCopy} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} disabled={text.length===0} ><b>Copy Text</b></button>

                <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />

            </div>

            <div className="container">

                <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text Summary</h3>

                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>

                <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />

            </div>

            <div className="container">

                <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h3>

                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text}</p>

            </div>

        </div>

    )
}