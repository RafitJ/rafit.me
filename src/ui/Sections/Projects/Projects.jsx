import React, { Component } from 'react';
import compass from '../../../assets/images/projects/Compass.svg';
import density from '../../../assets/images/projects/Density.svg';
import framear from '../../../assets/images/projects/FrameAR.svg';
import gaze from '../../../assets/images/projects/Gaze.svg';
import mesh from '../../../assets/images/projects/Mesh.svg';
import pillar from '../../../assets/images/projects/Pillar.svg';
import pseudo from '../../../assets/images/projects/PseudoLogo.svg';
import realm from '../../../assets/images/projects/Realm.svg';
import traffix from '../../../assets/images/projects/Traffix.svg';
import { openInNewTab } from '../../utils';
import Header from '../Header';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  state = {
    width: window.innerWidth,
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    return (
      <div className="section">
        <Header text="Projects" />
        <div
          style={{
            marginTop: 24,
            marginBottom: 12,
            width: '100%',
            textAlign: 'center',
            color: 'gray',
          }}
        >
          I made some pretty crazy stuff at hackathons
        </div>
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            flexWrap: 'wrap',
            width: '65%',
            justifyContent: 'center',
          }}
        >
          <ProjectCard
            img={density}
            title="Density"
            desc="Passive Wifi Density Triangulation"
            link="https://github.com/rafitj/density"
            onClick={this.openModal}
            trophy="RU Hacks 2019 2nd Place"
            hackerUrl="https://ruhacks2019.hackerearth.com/challenges/hackathon/ru-hacks-2019/dashboard/1e422e1/submission/"
            color="#61C7D8"
          />
          <ProjectCard
            img={traffix}
            title="Traffix"
            desc="Autonomous Car Networks"
            link="https://github.com/rafitj/traffix"
            onClick={this.openModal}
            trophy="Delta Hacks 2020 API Prize"
            devpostUrl="https://devpost.com/software/traffix-pns9ax"
            color="#7CDD86"
          />
          <ProjectCard
            img={framear}
            title="FrameAR"
            desc="VCS and AR Viz for 3D CAD"
            link="https://github.com/rafitj/framear"
            trophy="ENG Hacks 2019 1st Place"
            devpostUrl="https://devpost.com/software/framear"
            color="#D66B6B"
          />
          <ProjectCard
            img={compass}
            title="Compass"
            desc="City Exploration via AR and Facebook"
            link="https://github.com/rafitj/compass"
            trophy="Hack the North 2019 API Prize"
            devpostUrl="https://devpost.com/software/wandar"
            color="#0b87d6"
          />
          <ProjectCard
            img={realm}
            title="Realm"
            desc="AR Speech Powered Presentations"
            link="https://github.com/rafitj/realm"
            trophy="Hack the 6ix 2019 API Prize"
            devpostUrl="https://devpost.com/software/realm"
            color="#c80005"
          />
          <ProjectCard
            img={pillar}
            title="Pillar"
            desc="Voice-Powered Medical Hubs"
            link="https://github.com/rafitj/pillar"
            trophy="Hack Wester 2019 API Prize"
            devpostUrl="https://devpost.com/software/pillar-cum1sq"
            color="#ad6d42"
          />
          <div
            style={{
              marginTop: 24,
              marginBottom: 12,
              width: '100%',
              textAlign: 'center',
              color: 'gray',
            }}
          >
            And I've worked on some personal projects too
          </div>
          <ProjectCard
            img={mesh}
            title="Mesh"
            desc="Network Simulation"
            link="https://github.com/rafitj/gaze"
            color="#38b2ac"
          />
          <ProjectCard
            img={gaze}
            title="Gaze"
            desc="Real-Time Gaze Tracking Analytics"
            link="https://github.com/rafitj/gaze"
            color="#8376DF"
          />
          <ProjectCard
            img={pseudo}
            title="Pseudo"
            desc="Micro-Freelancing for All Creators"
            link="https://github.com/rafitj/pseudo-project"
            color="#cc0a60"
          />
        </div>
        <div
          className="link"
          style={{ width: 200, marginTop: 30 }}
          onClick={() => openInNewTab('http://github.com/rafitj')}
        >
          Much more on my Github
        </div>
      </div>
    );
  }
}

export default Projects;