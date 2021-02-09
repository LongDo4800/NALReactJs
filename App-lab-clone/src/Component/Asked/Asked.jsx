import React, { useState } from 'react'
import './Asked.css'

function Asked() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [click1, setClick1] = useState(false);
    const handleClick1 = () => setClick1(!click1);

    const [click2, setClick2] = useState(false);
    const handleClick2 = () => setClick2(!click2);

    const [click3, setClick3] = useState(false);
    const handleClick3 = () => setClick3(!click3);

    return (
        <div className='boxed'>
            <div className="asked">
                <div className="title">
                    <h1>Frequently asked questions</h1>
                    <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                </div>
                <div className="questions">
                    <div className="how-to">
                        <h2>How to contact with riders emergency?</h2>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                    </div>
                    <div className={click1 ? "how active" : "how"}>
                        <div className="caption" onClick={handleClick1}>
                            <h2>App install failed, how to update system information?</h2>
                            {click1 ? <i class="fas fa-minus" /> : <i class="fas fa-plus" />}
                        </div>
                        <div className="moreinfo">
                            <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <p> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                    </div>
                    <div className={click2 ? "how active" : "how"}>
                        <div className="caption" onClick={handleClick2}>
                            <h2>Website reponse taking time, how to improve?</h2>
                            {click2 ? <i class="fas fa-minus" /> : <i class="fas fa-plus" />}
                        </div>
                        <div className="moreinfo">
                            <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <p> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                    </div>
                    <div className={click3 ? "how active" : "how"}>
                        <div className="caption" onClick={handleClick3}>
                            <h2>New update fixed all bug and issues</h2>
                            {click3 ? <i class="fas fa-minus" /> : <i class="fas fa-plus" />}
                        </div>
                        <div className="moreinfo">
                            <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <p> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                    </div>
                    <div className={click ? "how active" : "how"}>
                        <div className="caption" onClick={handleClick}>
                            <h2>How to contact with riders emergency?</h2>
                            {click ? <i class="fas fa-minus" /> : <i class="fas fa-plus" />}
                        </div>
                        <div className="moreinfo">
                            <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                            <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <p> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asked
