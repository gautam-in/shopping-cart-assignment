import "./SideContent.scss";

const SideContent = ({ className = "", title, description }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p className="text">{description}</p>
    </div>
  );
};

export default SideContent;
