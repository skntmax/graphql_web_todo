import React, { useEffect, useState } from "react";
import "./homepage.css";
import { useQuery, gql } from "@apollo/client";

function Homepage() {
  const [current_page, setCurrent_page] = useState(0);
  const GET_TODO_LISTS = gql`
    query ExampleQuery {
      count {
        total
      }

      getTodo {
        title
        discription
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TODO_LISTS);

  if (error) {
    return <p> error occured {error} </p>;
  }

  if (loading) {
    return <p> loading ...</p>;
  }

  if (data) {
    return (
      <>
        <div className="card_container">
          {data.getTodo.map((ele, i) => {
            return (
              <div
                class="card border-secondary mb-3 text-center"
                style={{ width: "18rem" }}
              >
                {ele.title}
                <div class="card-header">{}</div>
                <div class="card-body text-secondary">
                  <p class="card-text">{ele.discription}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="justiy-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              {new Array(Math.ceil(data.count.total / 20))
                .fill(undefined)
                .map((ele, i) => {
                  return (
                    <>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          {i + 1}
                        </a>
                      </li>
                    </>
                  );
                })}

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </>
    );
  }
}

export default Homepage;
