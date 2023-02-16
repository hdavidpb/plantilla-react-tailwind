import React from "react";
import { Tabs, Tab, TabsHeader } from "@material-tailwind/react";

import { StatisticsChart } from "@/widgets/charts";
import { statisticsChartsData } from "@/data";

export function ProjectsPage() {
  return (
    <div className="mt-12">
      <div className="w-100 mb-10">
        <Tabs value="magics">
          <TabsHeader>
            <Tab value="magics">magicos</Tab>
            <Tab value="popular">Populares</Tab>
            <Tab value="news">Nuevos</Tab>
            <Tab value="finished">Por Terminar</Tab>
          </TabsHeader>
        </Tabs>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props, idx) => (
          <StatisticsChart key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
