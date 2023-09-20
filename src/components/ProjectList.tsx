import { FunctionComponent } from "react";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";

interface ProjectListProps {
  projects: {
    img: string;
    category: string;
  }[];
  state: string;
}

export const ProjectList: FunctionComponent<ProjectListProps> = ({
  projects,
  state,
}) => {
  const images =
    state === "All"
      ? projects
      : projects.filter((project) => project.category === state);

  return (
    <Masonry columns={3} spacing={0}>
      {images.map((image, index) => (
        <div key={index} className="p-1">
          <Image className="w-64 h-full" src={image.img} alt={"image"} />
        </div>
      ))}
    </Masonry>
  );
};
