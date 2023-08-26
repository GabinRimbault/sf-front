import React, { useState } from 'react';
import Tabs from "./Tabs";

export default function GptTabs({ classTabs, children }) {
  const style = classTabs ? "gpt-tabs  " + classTabs : "gpt-tabs";
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={style}>
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <Tabs className="tab-content">
        {children[activeTab].props.children}
      </Tabs>
    </div>
  );
}
