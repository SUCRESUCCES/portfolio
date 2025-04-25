import SkillBadge from "./SkillBadge";

const SkillList = ({ title, items }) => {
  return (
    <div className="skill-group">
      <h4>{title}</h4>
      <div className="badge-group">
        {items.map((skill, idx) => (
          <SkillBadge key={idx} label={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
