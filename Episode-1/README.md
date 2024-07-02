## Episode 01

This example demonstrates how to use React via CDN links to create a simple React element and render it into the DOM.

### Setup

1. **Create an `index.html` file** and include the following CDN links for React and ReactDOM in the `<head>` section of your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React CDN Example</title>
    <!-- React CDN Links -->
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
    <div id="root"></div>
    <script src="app.js"></script>
</body>
</html>
```

2. **Create an `app.js` file** and include the following code to create and render React elements:

```javascript
// Create a React element
const element = React.createElement('h1', null, 'Hello, React!');

// Create nested React elements
const nestedElement = React.createElement('div', null,
    React.createElement('h1', null, 'Hello, React!'),
    React.createElement('p', null, 'This is a nested element example.')
);

// Get the root element from the DOM
const root = document.getElementById('root');

// Render the React elements into the DOM
ReactDOM.createRoot(root).render(nestedElement);
```

3. **Open your `index.html` file** in a web browser to see the React elements rendered on the page.

### Explanation

- **React.createElement**: This function creates a React element. The first argument is the type of the element (e.g., `'h1'`, `'div'`), the second argument is the props object (use `null` if there are no props), and the third argument is the content or children of the element.
  
- **Nested React Elements**: You can create nested elements by nesting `React.createElement` calls inside each other. In the example, an `h1` and a `p` element are nested inside a `div` element.

- **Rendering**: The `ReactDOM.createRoot(root).render(nestedElement)` method is used to render the React elements into the DOM. The `root` is the DOM element where the React elements will be mounted.

This setup allows you to quickly start using React without any build tools or package managers. You can extend this example by adding more complex components and interactivity as needed.

---

### FAQ

#### What is `Emmet`?
`Emmet` is the essential toolkit for web developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

#### What is `CDN`? Why do we use it?
A `Content Delivery Network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The goal is to provide high availability and performance by distributing the service spatially relative to end users.

#### Why is `React` known as React?
It's called `React` because it reacts. It was developed by Facebook to improve the user interface development and more effectively change (REACT to) what the user sees when they're interacting with the app.

#### What is `crossorigin` in the script tag?
The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. The purpose of the crossorigin attribute is to share resources from one domain to another domain, handling the CORS request safely.

#### What is the difference between `React` and `ReactDOM`?
`React` is a JavaScript library for building User Interfaces, whereas `ReactDOM` is a JavaScript library that allows React to interact with the DOM. The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server`, we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

#### What is the difference between `react.development.js` and `react.production.js` files via `CDN`?
`Development` is the stage of an application before it's made public, while `production` is the term used for the same application when it's made public. The `development build` is several times (maybe 3-5x) slower than the `production build`.

#### What are `async` and `defer` attributes in the `<script>` tag?
- **Async**: The `async` attribute is a boolean attribute. The script is downloaded in parallel (in the background) to parsing the page and executed as soon as it is available, without blocking HTML DOM construction during the downloading process.

```html
<script async src="demo_async.js"></script>
```

- **Defer**: The `defer` attribute is a boolean attribute. The script is downloaded in parallel (in the background) to parsing the page and executed after the page has finished parsing. The `defer` attribute tells the browser not to wait for the script.

```html
<script defer src="demo_defer.js"></script>
```

#### Difference between a `Library` and a `Framework`?
A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks. A library is a collection of packages that perform specific operations, whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can call whenever they write code. React is a library, and Angular is a framework. The framework provides the flow of a software application and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

---