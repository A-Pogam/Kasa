import Collapse from "../components/Collapse";  
import '../styles/pages/about.scss';

const CollapseAbout = () => {
  return (
    <div>
      <Collapse title="Fiabilité" />
      <Collapse title="Respect" />
      <Collapse title="Service" />
      <Collapse title="Sécurité" />
    </div>
  );
};

export default CollapseAbout;
