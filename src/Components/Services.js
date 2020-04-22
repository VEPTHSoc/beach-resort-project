import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title.js";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Enim reprehenderit in commodo culpa exercitation cupidatat ea fugiat",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Enim reprehenderit in commodo culpa exercitation cupidatat ea fugiat",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Enim reprehenderit in commodo culpa exercitation cupidatat ea fugiat",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Enim reprehenderit in commodo culpa exercitation cupidatat ea fugiat",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
