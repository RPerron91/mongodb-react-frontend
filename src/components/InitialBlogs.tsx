import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { PostDisplay } from "./BlogDisplay";
import { Blog } from "./BlogType";

export function InitialDisplay() {
  const placeholder: Blog[] = [
    {
      _id: undefined,
      Title: undefined,
      Body: undefined,
      Author: undefined,
      Date: undefined,
      __v: undefined,
    },
  ];

  const [blogs, setBlogs] = useState<Blog[] | void>(placeholder);
  const [compArray, setArray] = useState([]);
  const [error, setError] = useState<boolean>(false);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/blog-posts");
      setBlogs(data);
      return data;
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    //@ts-expect-error
    getBlogs().then(function (res, err) {
      let allBlogs = [];
      res.forEach((b) => {
        allBlogs.push(<PostDisplay key={b._id} post={b} />);
      });
      setArray(allBlogs);
    });
  }, []);

  console.log(error);

  if (blogs[0].Title) {
    console.log(blogs);
    console.log(compArray);
    return (
      <>
        <Grid justifyContent="center" alignItems="center">
          <div>
            <h1>Test Blog Connection:</h1>
            <div>{compArray}</div>
          </div>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid justifyContent="center" alignItems="center">
          <h1>No Content To Display</h1>
        </Grid>
      </>
    );
  }
}
