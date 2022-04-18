import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe 
          title="Product Data Reporting"
          style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-igupw/embed/charts?id=6255ac26-7c1a-4c7e-8c95-a54c6fa0a1a1&maxDataAge=300&theme=light&autoRefresh=true"
            >
            </iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
