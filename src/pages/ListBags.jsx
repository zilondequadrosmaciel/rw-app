import { useEffect, useState } from "react";
import axios from "axios";

import { Bag, config } from "./Bag";

export const ListBags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://rw-api-production.up.railway.app/user/all/",
        {
          config,
        }
      );
      setBags(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="jumbotron bg-danger">
      <div className="card p-2 bg-danger">
        <div className="container bg-danger border border-3 p-2">
          <div className="row">
            {bags.map((bag, index) => {
              return (
                <div key={index} className="col-md-4">
                  <Bag bag={bag} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
