import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Question from "./Question";

import box from './box.png'
import cuteCat from './cute-cat.jpg'
import './App.css'

const override = {
  display: "block",
  margin: "0 auto",
};

function App() {
  let [loading, setLoading] = useState(false);
  let [boxOpen,setBoxOpen] = useState(false);
  let [ableQuestion,setAbleQuestion] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])

  const handleOnClickImg = (e) => {
    const elStyle = e.target.style;
    elStyle.transform = 'translateX(300px)';
    elStyle.opacity = '0';
    elStyle.cursor = 'default';
    
    setTimeout(() => {
      setBoxOpen(true)
    }, 1000);
  }

  const handleOnClickNext = (e) => {
      setAbleQuestion(true)
  }

  return (
    <div>
      { 
        loading ? 
        <div className="dumpling-loading">
          <ClimbingBoxLoader
            color="#d63691"
            loading={loading}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2 className="title">Đợi anh một xíu nhớ...</h2>
        </div>

        :
        
        <div className="love-box"> 
          <div className="box-1">
            {
              !boxOpen &&
                <div className="d-flex">
                  <h1  className="box-1__title">Open the box</h1>
                  <div className="box-1_img-wrapper">
                    <img onClick={handleOnClickImg} src={box} alt="123"/>
                  </div>
                </div>
            }
            {
              boxOpen && !ableQuestion &&
              <div className="d-flex">
                <h1  className="box-2__title">Sorry for pressuring you</h1>
                <div className="box-2_img-wrapper">
                  <img src={cuteCat} alt="123"/>
                </div>
                <button onClick={handleOnClickNext} className="box-2__button">Next</button>
              </div>
            }
            {
              ableQuestion && 
              <Question />
            }
          </div>
        </div>
      }
    </div>
  );
}


export default App;
