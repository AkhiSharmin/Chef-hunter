import React from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div>
      <div>
        {/* create pdf */}
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button
              className="btn border-0 bg-orange-500 my-10 ml-96 text-2xl"
              onClick={toPdf}
            >
              Download pdf
            </button>
          )}
        </ReactToPdf>
      </div>
      <div
        className="mx-auto"
        style={{ width: 900, height: 1000, background: "white" }}
        ref={ref}
      >
        <div className=" mx-auto">
          {/* all question ans */}
          <div>
            <h2 className="text-4xl font-bold">
              1.Tell us the differences between uncontrolled and controlled
              components?
            </h2>
            <p className="text-2xl my-10 leading-relaxed">
              Ans:React components that display HTML form elements are referred
              to as controlled and uncontrolled components.The main distinction
              between them is how they approach value. Uncontrolled components
              allow the DOM to handle the form data independently by passing the
              value down through props. React state has no control over them.
              Use refs to gain access to the value of an uncontrolled component.
              A file input, for instance, is an uncontrolled component since it
              relies on the browser's internal handling of the value and
              updating it via callbacks like onChange and onClick. React state
              has control over them. The controlled component receives new
              values as props from the parent component, which handles its own
              state. A text input, for instance, is a managed.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              2.How to validate React props using PropTypes?
            </h2>
            <p className="text-2xl my-10 leading-relaxed">
              Ans: In React, PropTypes is a built-in typechecking library that
              allows you to validate the types of props passed to a component,
              and it helps to catch bugs early in the development process.
              Here's how to validate React props using PropTypes: First, you
              need to import PropTypes from the 'prop-types' package. You can do
              this by adding the following code
              <span>import PropTypes from 'prop-types.</span>
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              3.Tell us the difference between nodejs and express js?.
            </h2>
            <p className="text-2xl my-10 leading-relaxed">
              Ans:Although Node.js and Express.js are both well-known and
              frequently used technologies for creating JavaScript web
              applications, their functions and goals differ. The main
              variations between Node.js and Express.js are as follows:
              JavaScript code may be executed outside of a web browser using the
              Node.js runtime environment. It is based on Google's V8 JavaScript
              engine and offers a scalable, high-performance I/O strategy that
              is event-driven and non-blocking. Node.js has the ability to
              execute desktop programs, command-line tools, and server-side
              programs. A web application framework developed on top of Node.js
              is called Express.js. It offers several powerful tools for
              creating web and mobile apps. Express.js provides a
              straightforward, basic method for developing online applications,
              with a configurable routing system, middleware for....
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              4.What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="text-2xl my-10 leading-relaxed">
              Ans:In React, a custom hook is a JavaScript function that starts
              with the word 'use' and allows you to reuse stateful logic between
              multiple components. A custom hook provides a way to extract
              common logic from components into a reusable function. The
              useInput hook in this illustration accepts an initial value as an
              argument, initializes the state using the useState hook, and then
              provides an array with the current value and a handleChange method
              to update the value. To encapsulate and reuse stateful logic
              amongst other components, you would develop a custom hook. You may
              separate that logic into a custom hook and reuse it in each
              component, for instance, if you have two or more components that
              share functionalities or state management. By isolating concerns
              and grouping together relevant functionality, custom hooks may
              also aid in maintaining the organization and readability of your
              code. They offer a clear, reusable interface for working with
              complicated logic and enable you to abstract it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
