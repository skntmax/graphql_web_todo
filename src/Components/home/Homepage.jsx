import React, { useEffect, useState } from "react";
import "./homepage.css";
import { useQuery, gql } from "@apollo/client";

function Homepage() {
  const [c_page, set_c_page] = useState(1);

  const GET_TODO_LISTS = gql`
    query getTodoListPage($pn: Int) {
      count {
        total
      }
      getTodo(pn: $pn) {
        title
        discription
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TODO_LISTS, {
    variables: { pn: c_page },
  });

  if (error) {
    return <p> error occured {error} </p>;
  }

  if (loading) {
    return <p> loading ...</p>;
  }

  return (
    <>
      <div className="card_container">
        {data &&
          data.getTodo.map((ele, i) => {
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

      <div className="d-flex justify-content-center">
        <div className="justiy-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => set_c_page((prev) => prev - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              {new Array(Math.ceil(data.count.total / 20))
                .fill(undefined)
                .map((ele, i) => {
                  return (
                    <>
                      <li
                        class={`page-item ${c_page == i + 1 ? "active" : ""} `}
                      >
                        <a
                          class="page-link "
                          href="#"
                          onClick={() => set_c_page(i + 1)}
                        >
                          {i + 1}
                        </a>
                      </li>
                    </>
                  );
                })}

              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => set_c_page((prev) => prev + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Homepage;
