import React from "react";
import Card from "./Components/Card";

const App = () => {
  const jobOpenings = [
    {
      title: "Copywriting",
      description: "Delivers persuasive and creative content.",
      tag1: "Blog Posts",
      tag2: "Video Scripts",
      tag3: "Sales Pages",
      tag4: "Slogans",
      color: "#B8E6D1",
      tagcolor: "#71f1b8",
    },
    {
      title: "Graphic Design",
      description: "Creates visually appealing designs and branding materials.",
      tag1: "Logos",
      tag2: "Posters",
      tag3: "Social Media",
      tag4: "Branding",
      color: "#FFD6A5",
      tagcolor: "#f7bb71",
    },
    {
      title: "Web Development",
      description: "Builds responsive and user-friendly websites.",
      tag1: "React",
      tag2: "Node.js",
      tag3: "API Integration",
      tag4: "Responsive Design",
      color: "#A8DADC",
      tagcolor: "#6bdee2",
    },
    {
      title: "Digital Marketing",
      description: "Promotes brands through online marketing strategies.",
      tag1: "SEO",
      tag2: "PPC",
      tag3: "Email Marketing",
      tag4: "Analytics",
      color: "#F9C6C9",
      tagcolor: "#f8868e",
    },
    {
      title: "UI/UX Design",
      description: "Designs intuitive and engaging user experiences.",
      tag1: "Wireframes",
      tag2: "Prototypes",
      tag3: "User Research",
      tag4: "Figma",
      color: "#D8B4FE",
      tagcolor: "#b572fd",
    },
    {
      title: "Video Editing",
      description: "Produces polished and engaging video content.",
      tag1: "YouTube",
      tag2: "Reels",
      tag3: "Motion Graphics",
      tag4: "Color Grading",
      color: "#FFE599",
      tagcolor: "#fed559",
    },
    {
      title: "Data Analysis",
      description: "Transforms data into actionable business insights.",
      tag1: "Excel",
      tag2: "SQL",
      tag3: "Power BI",
      tag4: "Reporting",
      color: "#CDEAC0",
      tagcolor: "#a1ee7d",
    },
    {
      title: "Mobile App Development",
      description: "Develops high-performance applications for mobile devices.",
      tag1: "iOS",
      tag2: "Android",
      tag3: "Flutter",
      tag4: "React Native",
      color: "#C9DAF8",
      tagcolor: "#7ba8f5",
    },
  ];

  jobOpenings.map((elem) => {
    console.log(elem);
  });

  // let arr = [10, 20, 30]

  return (
    <div className="parent">
      {jobOpenings.map((elem) => {
        return (
          <Card
            title={elem.title}
            des={elem.description}
            t1={elem.tag1}
            t2={elem.tag2}
            t3={elem.tag3}
            t4={elem.tag4}
            color={elem.color}
            tagcolor={elem.tagcolor}
          />
        );
      })}
    </div>
  );
};

export default App;
