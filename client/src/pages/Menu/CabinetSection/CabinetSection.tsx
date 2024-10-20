import { ReactNode } from "react";
import "./CabinetSection.style.scss";

interface CabinetSectionProps {
  title: string;
  lineItems: ReactNode[];
}

function CabinetSection({ title, lineItems }: CabinetSectionProps) {
  return (
    <div className="caveman spongebob">
      <img src="caveman.png" width="400" height="200"></img>
      <div>
        <div>{title}</div>
        <ul>
          {lineItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CabinetSection;
