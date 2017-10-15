import React from "react";
import { Switch, Route } from "react-router-dom";
import Gap from "./components/Gap";
import AllOccupations from "./components/AllOccupations";
import "./App.css";

const App = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Gap} />
            <Route path="/gap/:gapSlug" component={Gap} />
            <Route path="/all" component={AllOccupations} />
        </Switch>
    </main>
);

export default App;
