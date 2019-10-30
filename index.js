const helloReact = React.createElement("div", null, 
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("h3", null, "Things I Need To Do!"),
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Climb Mt. Everest"),
    React.createElement("li", null, "Run A Marathon"),
    React.createElement("li", null, "Feed The Dogs")
    );

ReactDOM.render(helloReact, document.getElementById("app"));