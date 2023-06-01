import React from "react";
export default function Skills({ children, technos, progress }) {
  return (
    <div className="skill_experiences">
      <div className="skill_define">
        <span>{ children }</span>
        <div className={progress}>
          <div className={technos}></div>
        </div>
      </div>
    </div>
  )
}