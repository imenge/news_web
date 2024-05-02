// import { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routers from "./routes";

function App() {
  const LayoutCom = () => {
    return (
      <Suspense fallback={<>loading ...</>}>
        <Router>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    );
  };
  return (
    <div className="App">
      <LayoutCom />
    </div>
  );
}

export default App;
