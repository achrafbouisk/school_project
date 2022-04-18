import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe 
            title="Sales Data Reporting"
            src="https://charts.mongodb.com/charts-project-0-igupw/embed/charts?id=6255a89e-fa48-4ab1-82b6-d7ce79c076df&maxDataAge=300&theme=light&autoRefresh=true"
            style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
                width: "100%",
                height: "350px",
              }}
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
