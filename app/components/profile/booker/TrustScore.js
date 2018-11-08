import * as React from 'react';

const TrustScore = (props) => (
  <div className={"trust-score-container"}>
      <h6>
          Trust score
      </h6>
      <div className={"trust-score-line"} style={{background: "linear-gradient(to right, #fd2ac5, #3b096e "+ (props.score/5)*100 +"%, rgba(128, 128, 128,0.2) " + (props.score/5)*100 + "%, rgba(128, 128, 128,0.2))"}}>
          <div className={"trust-score-line-item"}/>
          <div className={"trust-score-line-item"}/>
          <div className={"trust-score-line-item"}/>
          <div className={"trust-score-line-item"}/>
          <div className={"trust-score-line-item"}/>
          <div className={"trust-score-star"} style={{left: "calc("+(props.score/5)*100+"% - 2rem)"}}>
              <span>{props.score}</span>
              <img src={"/static/img/star_rate_profile.png"} style={{width: "4.7rem", height:"4.5rem"}}/>
          </div>
      </div>
  </div>
);

export default TrustScore;