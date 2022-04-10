import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { GetPostList } from "../Query";
import PostList from "./PostList";

const Home = (props: any) => {
  const { isError, error, data, isFetching, isLoading } = useQuery(
    "GETALL",
    GetPostList
  );
  // console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading components.... </p>;
  return (
    <div>
      <span>{isFetching && <p>updating</p>}</span>
      <main>
        {data.map((info: any) => {
          return (
            // <PostList key={info.id} {...info} />
            <ul key={info.id}>
              <li>{info.id}</li>
              <li>Name : {info.name}</li>
              <li>Description : {info.body}</li>
              <button>
                <Link to={`/posts/${info.id}`}>view</Link>
              </button>
            </ul>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
