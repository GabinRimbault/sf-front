import React from "react";

export default function Tabs({ title, children }) {
  return (
    <div className="tab-content">
      {children}
    </div>
  );
}
