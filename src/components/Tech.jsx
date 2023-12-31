import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../layout";
import { technologies } from "../constants";

const TechView = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const Tech = SectionWrapper(TechView, "");

export default Tech;
