import { Link, useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import HaderPage from "./HaderPage";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
    const history = useHistory();
    return (
        <div>
            <div id="header">
                <h1>17:00</h1>
                <HaderPage />
            </div>
            <div id="body">
                <switch>
                    <Route exact={true} path="/">
                        <MainPageComponent />
                    </Route>
                    <Route exact={true} path="/products/:id">
                        <ProductPage />
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage />
                    </Route>
                </switch>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
