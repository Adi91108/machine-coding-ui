import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul className="tabs">
        <li
          onClick={() => handleTabClick("home")}
          className={`tab ${activeTab === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => handleTabClick("pricing")}
          className={`tab ${activeTab === "pricing" ? "active" : ""}`}
        >
          Pricing
        </li>
        <li
          onClick={() => handleTabClick("about")}
          className={`tab ${activeTab === "about" ? "active" : ""}`}
        >
          About
        </li>
      </ul>

      <div className="tab-content">
        <div
          id="home"
          className={`tab-content-item ${activeTab === "home" ? "active" : ""}`}
        >
          <h1>Home</h1>
          <p>This is the home</p>
        </div>
        <div
          id="pricing"
          className={`tab-content-item ${
            activeTab === "pricing" ? "active" : ""
          }`}
        >
          <h1>Pricing</h1>
          <p>Some information on pricing</p>
        </div>
        <div
          id="about"
          className={`tab-content-item ${
            activeTab === "about" ? "active" : ""
          }`}
        >
          <h1>About</h1>
          <p>Let me tell you about me</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
