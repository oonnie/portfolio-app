import React, { Component } from 'react';
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/front-end.png";
import backendIcon from "../assets/software-application.png";
import classNames from 'classnames';

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} 
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title }</h3>
        <div className='level-container'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}/>
          ))}
        </div>
      </div>
     
    ));
  }

  render() {
    const {activeMenuItem} = this.state;
    const menuItems = ["FRONT-END", "BACK-END"]; //organization of skills

    const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon; //frontend is first menu item
  
    return <div className="skill-menu">
      {menuItems.map((item, index) => (
        <div key={index} 
          className={classNames("skill-item", {activeSkill: activeMenuItem === index+1 })}
          onClick={() => this.handleMenuItemClick((index + 1))}
        >
          <h2 className='skill-title'>{item}</h2>
        </div>
      ))}
      <img className='skill-icon' src={currentIcon} alt="current skill"/>
      <div className='skill-sub-container'>
        {this.renderContent(skills[activeMenuItem])}
      </div>
    </div>
  }
}


