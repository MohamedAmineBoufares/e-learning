import React from "react";
import "./AllCoursesCard.css";

import { Link } from "react-router-dom";

function AllCoursesCard() {
  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src="http://webi.io/wp-content/uploads/2016/05/fb-learn-how-to-setup-facebook-marketing-ads-in-20-min.png"
          alt="Card cap"
        />
        <div class="card-body col-sm-12">
          <h4 className="card-text">Course Price</h4>
          <h2 class="card-title">Course Title</h2>
          <p class="card-text d-flex justify-content-around w-50">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p>
          <div className="d-flex justify-content-between mb-2">
            <button className="btn d-flex align-items-center buy__this">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>Buy
              this course
            </button>
            
              <Link to="/courseInfos" className="btn d-flex align-items-center see__more">
                See more
              </Link>
            
          </div>

          <button className="btn d-flex align-items-center">
            <i class="fa fa-heart mr-2" aria-hidden="true"></i>Add to favorites
          </button>
          <button className="btn d-flex align-items-center mb-2">
            <i class="fa fa-play mr-2" aria-hidden="true"></i>Watch preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllCoursesCard;