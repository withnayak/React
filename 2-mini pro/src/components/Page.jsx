import React from "react";

const Page = (props) => {
  return (
    <div>
      <div className="card">
        <div>
          {" "}
          <div className="top2">
            <button>available</button>
            <h3>${props.pay}/hr</h3>
          </div>
          <div className="dp">
            <img src={props.logo} alt="Profile" />
          </div>
          <div className="details">
            <h1>{props.name}</h1>
            <h3>{props.post}</h3>
            <h3 className="location">
              <i className="fa-regular fa-building"></i> {props.profile}
            </h3>
          </div>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
            <h4>{props.tag3}</h4>
            <h4 className="more">{props.more}</h4>
          </div>
          <p>{props.about}</p>
          <div className="bottom">
            <button>VIEW PROFILE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
