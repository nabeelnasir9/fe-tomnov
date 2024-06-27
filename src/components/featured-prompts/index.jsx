import React, { useState } from "react";
import RightIcon from "./../../assets/right.svg";
import "./index.css";
import Grid from "@mui/material/Grid";
import FeaturedPromptsImage1 from "./../../assets/featured-prompts-1.png";
import FeaturedPromptsImage2 from "./../../assets/featured-prompts-2.png";
import FeaturedPromptsImage3 from "./../../assets/featured-prompts-3.png";
import { FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";

const FeaturedPrompts = () => {
  const [list, setList] = useState([
    {
      save: true,
      url: FeaturedPromptsImage1,
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "TFares",
      rating: 3.2,
      totalReview: 6,
      title: "Abstract Splatter Art",
      price: 2.99,
    },
    {
      save: true,
      url: FeaturedPromptsImage2,
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "TFares",
      rating: 3.2,
      totalReview: 6,
      title: "Abstract Splatter Art",
      price: 2.99,
    },
    {
      save: true,
      url: FeaturedPromptsImage3,
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "TFares",
      rating: 3.2,
      totalReview: 6,
      title: "Abstract Splatter Art",
      price: 2.99,
    },
    {
      save: true,
      url: FeaturedPromptsImage1,
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "TFares",
      rating: 3.2,
      totalReview: 6,
      title: "Abstract Splatter Art",
      price: 2.99,
    },
  ]);
  return (
    <div className="mt-[92vh]">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="fea-pro-header">
            <div>
              <p className="fea-pro-discover">Discover the Potential of</p>
              <h1 className="fea-pro-heading">Featured Prompts</h1>
              <p className="fea-pro-popular">
                Popular tarot card we recommend for you
              </p>
            </div>
            <button className="see-all-button">
              See All
              <img src={RightIcon} alt="icon" />
            </button>
          </div>
          <Grid container spacing={2}>
            {list.map((v, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div className="fea-pro-card">
                    <div className="fea-pro-card-image-main">
                      <img src={v.url} alt="url" />
                      <div className="fea-pro-card-header">
                        <div>Tarot Card</div>
                        <button>
                          {!v.save ? (
                            <GoHeart color="#fff" />
                          ) : (
                            <GoHeartFill color="#fff" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="fea-pro-card-footer">
                      <div>
                        <div className="fea-pro-card-profile-main">
                          <img
                            src={v.profile}
                            className="fea-pro-card-profile"
                            alt="profile"
                          />
                          <p>{v.name}</p>
                        </div>
                        <div className="fea-pro-card-rating-main">
                          <FaStar color="#fff" />

                          <p className="fea-pro-card-rating">{v.rating}</p>
                          <p className="fea-pro-card-total-review">
                            ({v.totalReview})
                          </p>
                        </div>
                      </div>
                      <div className="fea-pro-card-footer-inner">
                        <p className="fea-pro-card-title">{v.title}</p>
                        <p className="fea-pro-card-price">${v.price}</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      </Grid>
    </div>
  );
};
export default FeaturedPrompts;
