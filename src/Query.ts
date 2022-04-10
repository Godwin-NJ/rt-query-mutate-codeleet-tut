import axios from "axios";

export const GetPostList = async () => {
  const { data } = await axios.get("http://localhost:5050/posts/");
  return data;
};

interface singlePost {
  queryKey: any;
}

export const GetSinglePost = async ({ queryKey }: singlePost) => {
  const [_key, { id }] = queryKey;
  const { data } = await axios.get(`http://localhost:5050/posts/${id}`);
  return data;
};

// export const
