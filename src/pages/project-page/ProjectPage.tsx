import { useParams } from "react-router-dom";
import { SpringyText } from "../../components";

const ProjectPage = () => {
  const { projectName } = useParams();

  return (
    <div className="section">
      <SpringyText text={`${projectName} Page is Still Work In Progress`} />
    </div>
  );
};

export default ProjectPage;
