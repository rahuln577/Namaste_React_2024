const heading1 = React.createElement("h1", {}, "hello world  in h1");
const child1 = React.createElement("div", { id: "child1" }, heading1);
const parent1 = React.createElement("div", { id: "parent1" }, child1);

const heading2 = React.createElement("h2", {}, "hello in h2");
const child2 = React.createElement("div", { id: "child2" }, heading2)
const parent2 = React.createElement("div", { id: "parent2" }, child2);

const grandpa = React.createElement("div", { id: "granddad" }, [parent1, parent2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(grandpa);			
