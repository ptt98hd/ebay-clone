import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

function HeaderSearch() {
  const { categories } = useContext(UserContext);
  // console.log(categories);

  const parentCategories = categories.filter(
    (category) => category.parentId === null,
  );
  // console.log(parentCategories);

  const childCategories = categories.filter(
    (category) => category.parentId !== null,
  );
  // console.log(childCategories);

  return (
    <nav className="navbar navbar-expand py-3 border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/ebay.svg"
            alt="eBay"
            className="img-fluid"
            style={{ height: "3rem" }}
          />
        </Link>
        <div className="dropdown me-3 d-none d-lg-block">
          <button
            className="btn btn-primary btn-lg rounded-pill px-4 dropdown-toggle border-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundImage: "none" }}
          >
            <i className="bi bi-list"></i>
          </button>
          <div
            className="dropdown-menu dropup-center mt-3 p-3 shadow link-underline-opacity-25-hover"
            style={{ width: "63rem" }}
          >
            <div className="row row-cols-3 g-4">
              {parentCategories.map((parentCategory) => {
                return (
                  <div
                    className="col"
                    key={`category-parent-${parentCategory.id}`}
                  >
                    <h6 className="fw-bold mb-3 fs-5">{parentCategory.name}</h6>
                    <div className="vstack gap-3">
                      {childCategories
                        .filter(
                          (childCategory) =>
                            childCategory.parentId == parentCategory.id,
                        )
                        .map((childCategory) => {
                          return (
                            <span key={`category-child-${childCategory.id}`}>
                              <Link
                                to={`/product?category=${childCategory.id}`}
                                className="text-decoration-none text-dark text-nowrap text-truncate"
                              >
                                {childCategory.name}
                              </Link>
                            </span>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="input-group">
          <div className="input-group-text rounded-start-pill px-4">
            <i className="bi bi-search"></i>
          </div>
          <input
            type="search"
            className="form-control"
            placeholder="Search for anything"
            name="searchProductName"
            id="search-product-name"
          />
          <div className="input-group-text rounded-end-pill">
            <select
              name="categoryId"
              id="categoryId"
              className="form-select border-0 shadow-none bg-transparent overflow-hidden"
              style={{ width: "12rem" }}
            >
              <option value="0">All Categories</option>
              {parentCategories.map((parentCategory) => {
                return (
                  <option key={parentCategory.id} value={parentCategory.id}>
                    {parentCategory.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill px-5 mx-3"
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default HeaderSearch;
