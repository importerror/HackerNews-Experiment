import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { highlightWord } from "../utils/helper";

export default function ResultCard(props) {
  let { results, query } = props;
  console.log(results);
  if (results === null) return "";

  if (results.length === 0) return <div>No results found</div>;
  dayjs.extend(relativeTime);

  return (
    <div>
      {results.map((data, key) => {
        return (
          <div className="resultCard" key={key}>
            <div className="d-flex light ">
              <span
                className="bold mr-10 dark"
                dangerouslySetInnerHTML={
                  data.title && highlightWord(data.title, query)
                }
              ></span>
              (<div className="truncate italics">{data.link}</div>)
            </div>

            <div className="light meta-info">
              <span>
                Author:{" "}
                <span
                  dangerouslySetInnerHTML={highlightWord(data.author, query)}
                ></span>{" "}
                | {dayjs(data.date).fromNow()} | {data.commentCount} comments
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
