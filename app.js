const person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: 7 }, props.name),
        React.createElement("p", { key: 8 }, props.occupation),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement(
            "h1",
            { className: "title", key: 2 },
            "React is rendered"
        ),
        React.createElement(
            person,
            { name: "moses", occupation: "SDE", key: 4 },
            null
        ),
        React.createElement(
            person,
            { name: "antony", occupation: "tester", key: 5 },
            null
        ),
        React.createElement(
            person,
            { name: "shankar", occupation: "analyst", key: 6 },
            null
        ),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));