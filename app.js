const person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.occupation),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement(
            "h1",
            { className: "title" },
            "React is rendered"
        ),
        React.createElement(
            person,
            { name: "moses", occupation: "SDE" },
            null
        ),
        React.createElement(
            person,
            { name: "antony", occupation: "tester" },
            null
        ),
        React.createElement(
            person,
            { name: "shankar", occupation: "analyst" },
            null
        ),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));