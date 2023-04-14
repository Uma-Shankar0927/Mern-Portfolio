import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool,FaGraduationCap} from 'react-icons/fa'

const About = () => {
  return (
    <div className="main-about">
      <VerticalTimeline lineColor="#0A0A0A">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#efefef", color: "#0A0A0A" }}
        contentArrowStyle={{ borderRight: "1px solid  #0A0A0A" }}
        iconStyle={{ background: "#0A0A0A", color: "#efefef"}}
        icon={<FaGraduationCap style={{color:"#efefef",background:"#0A0A0A"}}/>}
      >
        <h3>Gandhi Institute For Technology</h3>
        <h4>BBSR, India</h4>
        <p>Computer Science and Engineering</p>
        <p>
          2020-present <br />8.45 CGPA
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#efefef", color: "#0A0A0A" }}
        contentArrowStyle={{ borderRight: "1px solid  #0A0A0A" }}
        iconStyle={{ background: "#0A0A0A", color: "#efefef" }}
        icon={<FaSchool style={{color:"#efefef",background:"#0A0A0A"}}/>}
      >
        <h3>Kiit Higher Secondary School</h3>
        <h4>BBSR, India</h4>
        <p>
          2018-2020 <br />82%
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#efefef", color: "#0A0A0A" }}
        contentArrowStyle={{ borderRight: "1px solid  #0A0A0A" }}
        iconStyle={{ background: "#0A0A0A", color: "#efefef" }}
        icon={<FaSchool style={{color:"#efefef",background:"#0A0A0A"}}/>}
      >
        <h3>Kerala Public School</h3>
        <h4>Odisha, India</h4>
        <p>
          2006-2018 <br />80.6%
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default About;
