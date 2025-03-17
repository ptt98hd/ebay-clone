import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

function HomeCategories() {
  const { categories } = useContext(UserContext);

  const parentCategories = categories.filter(
    (category) => category.parentId === null,
  );

  return (
    <section>
      <h3 className="mb-4">Explore Popular Categories</h3>
      <div id="categories" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row row-cols-6 g-4">
              {parentCategories.map((parentCategory) => {
                return (
                  <div className="col" key={parentCategory.id}>
                    <div className="vstack gap-3">
                      <div className="rounded-circle p-4 bg-body-tertiary">
                        <img
                          src={parentCategory.image}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="text-center text-truncate fw-semibold">
                        {parentCategory.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
