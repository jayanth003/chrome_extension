import React from "react";
import "./Launcher.css";
import links from "../Data/PotalsData";
export default function Launcher(props) {
  function showPortalNames(e) {
    props.setShowPortalName(e.target.getAttribute("alt"));
  }
  function removePortalNames() {
    props.setShowPortalName("*-+ @React +-*");
  }
  return (
    <div>
      <section className="links-wrapper">
        {links.map((l) => (
          <div>
            <span>
              <a href={l.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={l.image}
                  alt={l.name}
                  onMouseEnter={showPortalNames}
                  onMouseLeave={removePortalNames}
                />
              </a>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
