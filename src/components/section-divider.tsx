import { FunctionalComponent } from "preact";

interface Props {
  image: string;
}

const SectionDivider: FunctionalComponent<Props> = ({ image }) => {
  return (
    <div className="w-full h-64 overflow-hidden flex items-center justify-center">
      <img src={image} alt="Villa Studio" className="w-full" />
    </div>
  );
};

export default SectionDivider;
