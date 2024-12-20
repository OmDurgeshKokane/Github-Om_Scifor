import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            
            {/* Card 1  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sdRIvQxSBfArITwaURCNiCo1hu9Vf_uEQ&s"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"Node.js Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    Node.js is a fast, open-source, server-side runtime that uses JavaScript and Chrome's V8 engine. Its non-blocking, event-driven architecture excels in real-time and scalable applications.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dWURcAshqm59-HEF-3zr7W6GhVIbWxXboQ&s"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"JavaScript Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    JavaScript is a versatile, high-level programming language widely used for building dynamic web applications. It enables interactive features like animations, form validations, and real-time updates.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6KCXAE4TunyfduxJYtY8nSAXWdFA_pk6_g&s"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"MongoDB Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    MongoDB is a powerful, open-source NoSQL database designed for flexibility and scalability. It stores data in a JSON-like, document-oriented format, making it ideal for modern applications with dynamic schemas.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"Express.js Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    Express.js is a minimal and flexible Node.js web application framework, designed for building efficient and robust server-side applications. It simplifies backend development by providing features for routing, middleware integration, and HTTP request handling.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"React.js Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    React.js is a popular, open-source JavaScript library for building dynamic user interfaces, particularly for single-page applications.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background:
                    mode === "dark" ? "rgb(30, 41, 59)" : "lightyellow",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTQXfbzOw-qTF9j7ZS11Oz7XLrMhyL1_tRuBYJNzyk-2b_UrBHaGxyHHOR1GivPtg9Sw&usqp=CAU"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"19 Dec 2024"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"SQL Blog"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It enables users to create, retrieve, update, and delete data through commands like.....(<b>Next Read on Blog's Page</b>)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
