import React from "react";
import "./FavCard.css";

import { isAuthenticated } from "../../../helpers/auth";
import { getLocalStorage } from "../../../helpers/localStorage";
import { useDispatch } from "react-redux";
import { removeFromFavList } from "../../../redux/actions/favoriteActions";


function FavCard({ courseName, courseID, courseSrc, _id }) {

  const dispatch = useDispatch()

  const remove = (e) => {
    e.preventDefault();
    if (isAuthenticated()) {
      const userID = getLocalStorage("user")._id;
      dispatch(removeFromFavList(userID, courseID));
    }
  };

  return (
    <div class="card-body align-items-center" style={{ width: "18rem" }}>
      <div className=" row d-flex justify-content-start align-items-center mb-2">
        <div className="col-4">
          <img
            class="card-img-top mr-2"
            src={`/uploads/${courseSrc}`}
            alt="Card cap"
            style={{ width: "5rem" }}
          />
        </div>
        <div className="col-5">
          <h5 class="card-title">{courseName}</h5>
        </div>

        <div className="col-2">
          <button className="btn btn-primary mb-2" title="add course to cart">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <button className="btn" title="remove from whishlist" onClick={remove}>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavCard;