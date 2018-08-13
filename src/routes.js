import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Posts from './components/posts';
import NewPosts from './components/new_post';
import ShowPosts from './components/show_posts';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Posts} />
    <Route path="posts/new" component ={NewPosts}/>
    <Route path="post/:id" component={ShowPosts}/>
  </Route>
);
