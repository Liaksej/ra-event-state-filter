"use client";
import { useState } from "react";

import { projects } from "./projects";
import { ProjectList } from "@/components/ProjectList";
import { Toolbar } from "@/components/Toolbar";

export default function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto w-[48.5rem] flex flex-col">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={(filter) => {
            setSelected(filter);
          }}
        />
        <ProjectList projects={projects} state={selected} />
      </div>
    </div>
  );
}
