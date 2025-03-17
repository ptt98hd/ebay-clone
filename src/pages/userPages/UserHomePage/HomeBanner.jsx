import { useState, useEffect } from "react";
import { api } from "../../../services";

const bannerService = api.banner;

function HomeBanner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const data = await bannerService.getBanners();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  return (
    <section
      id="home-banner"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
    >
      <div className="carousel-indicators">
        {banners.map((banner, index) => {
          return (
            <button
              key={index}
              type="button"
              data-bs-target="#home-banner"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          );
        })}
      </div>
      <div
        className="carousel-inner rounded rounded-4 border overflow-hidden"
        style={{ height: "24rem" }}
      >
        {banners.map((banner, index) => {
          return (
            <div
              key={banner.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-caption my-3">
                <h2 className="text-shadow">{banner.title}</h2>
                <p className="text-shadow">{banner.content}</p>
                <button
                  type="button"
                  className="btn btn-light rounded-pill px-4 shadow bg-opacity-10"
                >
                  {banner.action}
                </button>
              </div>
              <img
                src={banner.image}
                alt={banner.title}
                className="d-block w-100 object-fit-cover"
                style={{ height: "24rem" }}
              />
            </div>
          );
        })}
      </div>
      <div
        className="carousel-control-prev rounded-start-4"
        type="button"
        data-bs-target="#home-banner"
        data-bs-slide="prev"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
        }}
      >
        <button
          type="button"
          className="btn btn-light bg-white rounded-circle shadow"
          style={{ width: "3rem", height: "3rem" }}
        >
          <i className="bi bi-chevron-left" />
        </button>
      </div>
      <div
        className="carousel-control-next rounded-end-4"
        type="button"
        data-bs-target="#home-banner"
        data-bs-slide="next"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
        }}
      >
        <button
          type="button"
          className="btn btn-light bg-white rounded-circle shadow"
          style={{ width: "3rem", height: "3rem" }}
        >
          <i className="bi bi-chevron-right" />
        </button>
      </div>
    </section>
  );
}

export default HomeBanner;
