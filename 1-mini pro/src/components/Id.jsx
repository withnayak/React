import React from "react";

const Id = (props) => {
  
  return (
    <div className="card">
      <div>
        <div className="top">
          <a href={props.page} target="_blank"><img
            src={props.logo}
            alt=""
          />
          </a>
          <button>
            
            save <i className="fa-solid fa-bookmark"></i>
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Id;
