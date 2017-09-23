import React from "react";
import { Switch, Route } from "react-router-dom";
import Gap from "./components/Gap";
import "./App.css";

const App = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Gap} />
            <Route path="/gap/:gapSlug" component={Gap} />
        </Switch>
    </main>
);

export default App;
