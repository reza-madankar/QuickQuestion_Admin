import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Authentication from "component/authentication";
import Layout from "routes/layout";
import Overview from "routes/overview";
import User from "routes/user";
import Content from "routes/content";
import Category from "routes/category";
import Question from "routes/question";
import NotFound from "routes/notFound";

const root = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route
            path="/user"
            element={
              <Authentication>
                <User />
              </Authentication>
            }
          />
          <Route
            path="/content"
            element={
              <Authentication>
                <Content />
              </Authentication>
            }
          />
          <Route
            path="/category"
            element={
              <Authentication>
                <Category />
              </Authentication>
            }
          />
          <Route
            path="/question/:id"
            element={
              <Authentication>
                <Question />
              </Authentication>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(root, document.getElementById("root"));
