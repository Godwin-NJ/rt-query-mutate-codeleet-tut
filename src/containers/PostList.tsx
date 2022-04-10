import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { GetSinglePost } from "../Query";

interface dataInfo {
  name: String;
  body: String;
}

const PostList = () => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });
  const queryClient = useQueryClient();
  let navigate = useNavigate();
  let { id } = useParams();
  const { isError, error, data, isFetching, isLoading } = useQuery(
    ["SingleGet", { id }],
    GetSinglePost,
    {
      refetchOnWindowFocus: false,
      initialData: () => {
        const state = queryClient.getQueryState(["SingleGet"]);
        // console.log(state.data, "state");
        // setFormData({ name: state.name, body: state.body });
      },
    }
  );

  console.log(data, "singleItem");

  const inputChange = (e: any) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading components.... </p>;

  return (
    <main>
      <span>{isFetching && <p>updating</p>}</span>
      <ul>
        <li>{data.id}</li>
        <li>Name : {data.name}</li>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={inputChange}
        />
        <li>Description : {data.body}</li>
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={inputChange}
        />
      </ul>
      <button onClick={() => navigate("/")}>Home</button>
    </main>
  );
};

export default PostList;
