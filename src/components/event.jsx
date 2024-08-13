import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Events</h2>
        </div>
        <div className="row">
          <div className="event-items">
            <h1 className="event-title">International women's day 2024</h1>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="event-image col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
