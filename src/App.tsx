import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import PostList from "./containers/PostList";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
