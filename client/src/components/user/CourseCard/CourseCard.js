import React from "react";
import "./CourseCard.css";

function CourseCard() {
  return (
    <div className="col mb-5">
      <div class="card">
        <img
          class="card-img-top"
          src="https://top-sponsoring-tunisie.com/wp-content/uploads/2020/03/instagram-e-commerce-integration.jpg"
          alt="Card cap"
        />
        <div class="card-body col-sm-12 card__infos">
          <h2 class="card-title">Course Title</h2>
          <p class="card-text">Course description</p>
          <button class="btn btn-primary button__lets__resume">
            Let's learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
