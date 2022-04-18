import React from "react";

const UsersStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Users statistics</h5>
          <iframe 
          title="Users Data Reporting"
          style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-igupw/embed/charts?id=6255aee1-7aeb-4952-8f00-acdfa380c494&maxDataAge=300&theme=light&autoRefresh=true"
            >    
            </iframe>
        </article>
      </div>
    </div>
  );
};

export default UsersStatistics;
