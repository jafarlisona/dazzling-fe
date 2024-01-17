import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
function Add() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  function getAll(params) {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }
  useEffect(() => {
    getAll();
  }, []);
  async function deletePost(id) {
    await fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });
    getAll();
  }
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/posts/", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    getAll();
  }
  return (
    <section id="add">
      <div className="container">
        <Formik
          initialValues={{ image: "", title: "", folder: "", description: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            title: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            folder: Yup.string()
              .min(5, "Must be 5 characters or more")
              .required("Required"),
            description: Yup.string()
              .min(20, "Must be 20 characters or more")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="form">
              <label htmlFor="image">Image :</label>
              <Field name="image" type="text" />
              <ErrorMessage name="image" component="span"/>
            </div>

            <div className="form">
              <label htmlFor="title">Title :</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title"component="span" />
            </div>

            <div className="form">
              <label htmlFor="folder">Folder :</label>
              <Field name="folder" type="text" />
              <ErrorMessage name="folder" component="span"/>
            </div>

            <div className="form">
              <label htmlFor="description">Description:</label>
              <Field name="description" type="text" as="textarea" />
              <ErrorMessage name="description" component="span"/>
            </div>

            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div className="table">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Folder</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr>
                    <td>
                     <img src={x.image} alt="" />
                    </td>
                    <td>{x.title}</td>
                    <td><p>{x.description}</p></td>
                    <td>{x.folder}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => deletePost(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Add;
