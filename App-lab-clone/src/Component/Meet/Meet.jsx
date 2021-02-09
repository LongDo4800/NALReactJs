import React, {useState} from 'react'
import './Meet.css'
import CEO from '../../images/CEO.png'
import network from '../../images/meetcontent.png'

function Meet() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="containers">
            <div className="img">
                <img src={network} alt="error"/>
            </div>
            <div className='meet'>
                <div className="product">
                    <h1>Meet Client Satisfaction by using product</h1>
                    <p>The rise of mobile devices transforms the way we consume elevant channels such as Facebook.</p>
                    <i class="fas fa-star start"></i><i class="fas fa-star start"></i><i class="fas fa-star start"></i><i class="fas fa-star start"></i><i class="fas fa-star start"></i>
                    <h3>User friendly & Customizable</h3>
                    <p>Bring to the table win-win survival strategies to ensure proactive domi-nation. At the end of the day, going forward, a new normal
                    that has evolved from generation X is on the runway headding towards a streamlined cloud solutin. User generated content in real-time
                    will have multiple touchpoints for offshoring.
                    </p>
                    <div className="ceo">
                        <div className="details">
                            <img src={CEO} alt="error" />
                            <div className="info">
                                <h3>Zoltan Nemeth</h3>
                                <p>CEO of Pixler Lab</p>
                            </div>
                        </div>
                        <div className="butons" onClick= {handleClick}>
                            <div className={click ? 'pre active' : 'pre'}>
                                <i class="fas fa-long-arrow-alt-left"></i>
                            </div>
                            <div className={click ? 'next' : 'pre active'}>
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet
