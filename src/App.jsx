import React from "react";
import "./App.css";
import Section from "./components/Section";
import SkillList from "./components/Skill/SkillList";
import ProjectList from "./components/Project/ProjectList";
import EducationList from "./components/Education/EducationList";

const Portfolio = () => {
  const skills = {
    frontend: ["JavaScript", "React", "jQuery", "HTML5", "CSS3", "Ajax"],
    backend: ["Java", "JSP & Servlet", "MyBatis", "Spring Boot"],
    db: ["Oracle"],
    tools: ["Eclipse", "VS Code", "IntelliJ IDEA"],
    environment: ["Windows 10", "Tomcat"],
    collaboration: ["GitHub", "Google Docs", "SourceTree"],
  };

  const education = [
    "한국방송통신대학교 컴퓨터과학과 (2025.03 ~ 현재)",
    "KH 정보교육원 자바개발자 양성과정 (2024.10 ~ 2025.03)",
  ];

  const projects = [
    {
      name: "SINU-EDU",
      desc: "접근성 높은 온라인 코딩 교육 플랫폼. 질문 게시판 개발 및 UI/UX 개선.",
    },
    {
      name: "HAPLA",
      desc: "온라인 여행 정보 플랫폼. Google API를 활용한 일정 관리 및 커뮤니티 기능.",
    },
  ];

  return (
    <div className="container">
      <h1>조민주 | 풀스택 개발자</h1>
      <p className="subtitle">
        책임감과 실행력으로 사용자 중심 서비스를 개발합니다.
      </p>

      <Section title="Skills">
        {Object.entries(skills).map(([title, items]) => (
          <SkillList key={title} title={title} items={items} />
        ))}
      </Section>

      <Section title="Education">
        <EducationList items={education} />
      </Section>

      <Section title="Projects">
        <ProjectList projects={projects} />
      </Section>

      <Section title="Certifications">
        <p>컴퓨터활용능력 2급 (2024.09)</p>
      </Section>

      <Section title="자기소개 및 목표">
        <p>
          책임감과 실행력을 바탕으로 사용자 중심의 서비스를 구축하며, 지속적으로
          역량을 강화하여 웹 서비스 아키텍처를 설계하고 문제 해결 능력을
          키워가고 있습니다.
        </p>
      </Section>
    </div>
  );
};

export default Portfolio;
