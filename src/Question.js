import { useState, useEffect, useRef } from "react";

import './Question.css'
import gift from './gift.jpg'

function Question () {
    let [question1, setQuestion1] = useState(false);
    let [question2, setQuestion2] = useState(false);
    let [question3, setQuestion3] = useState(false);
    let [gifted, setGifted] = useState(false);
    let [final,setFinal] = useState(false);
    let [answer, setAnswer] = useState('')

    const questionTitle = useRef(null)

    useEffect(()=>{
        setTimeout(() => {
            questionTitle.current.style.display = 'none'
            setQuestion1(true)
        }, 2000);
    },[])

    useEffect(()=> {
        setAnswer('')
    },[question1,question2,question3])

    const handleQ1 = ()=> {
        setAnswer("Ra vẫn là vì thương ><");
        setTimeout(() => {
            setQuestion1(false);
            setQuestion2(true);
        }, 2000);
        
    }

    const handleQ1W = ()=>{
        setAnswer(":)) em tệ lắm chọn lại đi");
    }

    const handleQ2A = ()=>{
        setAnswer("thích vì tính cách ngoại hình, yêu vì ngu");
        setTimeout(() => {
            setQuestion2(false);
            setQuestion3(true);
        }, 2000);
        
    }

    const handleQ2B = ()=>{
        setAnswer("... không nghĩ là em sẽ chọn cái này, nhưng mà đúng với anh");
        setTimeout(() => {
            setQuestion2(false);
            setQuestion3(true);
        }, 2000);
    }

    const handleQ2W = () => {
        setAnswer(":)) anh biết rồi bé chọn cái khác đi sẽ cho em được noo");
    }

    const handleGift = () => {
        setGifted(true);
        setQuestion3(false);
    }

    const btn2 = document.querySelector('#not-btn')
    if(btn2) {
        btn2.onmousemove = (e) => {
            e.target.classList.add("movement1")
        }
        btn2.ontouchmove = (e) => {
            e.target.classList.add("movement1")
        }
    }

    const handleLast = () => {
        setGifted(false);
        setFinal(true)
    }

  
    return (
        <div className="d-flex question">
            <h1 ref={questionTitle} className="question__title">Give u a little game :))</h1>
            {
                question1 &&
                <div>
                    <h1 className="question__title">1. Vì sao không nên thả cá?</h1>
                    <div className="d-flex-o">
                        <div onClick={handleQ1} className="answer">
                            A. Vì sợ cá chết đuối
                        </div>
                        <div onClick={handleQ1}  className="answer">
                            B. Vì sợ ô nhiễm môi trường
                        </div>
                        <div onClick={handleQ1} className="answer">
                            C. Vì thương
                        </div>
                        <div onClick={handleQ1W} className="answer">
                            D. Om dưa
                        </div>
                    </div>
                    <h2 className="answer__title">{answer}</h2>
                </div>    
            }
            {
                question2 &&
                <div>
                    <h1 className="question__title">2. Love tiếng việt là gì?</h1>
                    <div className="d-flex-o">
                        <div onClick={handleQ2A} className="answer">
                            A. Yêu
                        </div>
                        <div onClick={handleQ2B}  className="answer">
                            B. QN
                        </div>
                        <div onClick={handleQ2B} className="answer">
                            C. Em
                        </div>
                        <div onClick={handleQ2W} className="answer">
                            D. Được ăn no 
                        </div>
                    </div>
                    <h2 className="answer__title">{answer}</h2>
                </div>    
            }
            {
                question3 &&
                <div>
                    <h1 className="question__title">3. Không hành không cà rốt</h1>
                    <div className="d-flex-o">
                        <div onClick={handleGift} className="answer">
                            Nhận quà
                        </div>
                    </div>
                </div>    
            }
            {
                gifted &&
                <div className="gift__img d-flex">
                    <img src={gift} alt="123"/>
                    <button onClick={handleLast} className="gift__img-btn">Nhận</button>
                    <button id="not-btn" className="gift__img-btn">Chê</button>
                </div>    
            }
            {
                final && 
                <div className="d-flex">
                    <h2 className="question__title">Hơi phèn nhưng mà không ra gì :)) </h2>
                    <h2 className="question__title">Chúc bé mai thi okiii nhé. Ngủ ngonnn </h2>
                </div>
                
            }
        </div>
    )
}

export default Question