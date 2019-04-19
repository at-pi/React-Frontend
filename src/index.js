import React from "react";
import ReactDOM from "react-dom";
import  "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");
ReactDOM.render(
    <div>
    <div class="row">
        <div class="column" >
            <h2>All</h2>
            <TodoList/>
        </div>
        <div class="column" >
            <h2>Todo</h2>
            <TodoList/>
        </div>
        <div class="column" >
            <h2>Progress</h2>
            <TodoList/>
        </div>
        <div class="column" >
            <h2>Completeds</h2>
            <TodoList/>
        </div>
    </div>
    </div>,
    destination
);
