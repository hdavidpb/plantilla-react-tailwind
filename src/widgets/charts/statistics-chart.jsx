import SCButton from "@/components/SCButton";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import ProgressBar from "@/components/ProgressBar";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
export function StatisticsChart({ title, description }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader variant="gradient">
        <img
          src="https://www.socias.org/wp-content/uploads/jet-engine-forms/906/2023/02/20230202_174811-scaled.jpg"
          alt="project-1"
        />
      </CardHeader>

      <CardBody className="relative p-6">
        <Avatar
          size="xl"
          variant="circular"
          src="https://uploads-ssl.webflow.com/619916db2569bf79a09da655/61aa7d15a514f23b6b751b01_javier1.jpg"
          className="absolute -top-10 right-6"
        />

        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
        <Typography variant="small" className="font-bold text-pink-600">
          Salud
        </Typography>
      </CardBody>

      <CardFooter className="flex flex-col items-start justify-start gap-1 border-t border-blue-gray-50 px-6 py-5">
        <ProgressBar width={45} />
        <Typography
          variant="small"
          className="flex items-center font-normal text-blue-gray-600"
        >
          <RocketLaunchIcon strokeWidth={2} className="h-4 w-4 text-inherit" />

          <Tooltip content={"Javier"}>
            <Avatar
              src="https://cdn2.hubspot.net/hubfs/53/Que%20es%20un%20emprendedor.jpg"
              alt="avatar"
              size="xs"
              variant="circular"
              className="cursor-pointer border-2 border-white"
            />
          </Tooltip>
          <Tooltip content={"Javier"}>
            <Avatar
              src="https://latinaslifestyle.org/wp-content/uploads/2021/11/Tienes-personalidad-de-emprendedora-2.png"
              alt="avatar"
              size="xs"
              variant="circular"
              className="-ml-2.5 cursor-pointer border-2 border-white"
            />
          </Tooltip>
          <Tooltip content={"Javier"}>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgv2h1zoYcSL1NiNqtiROnPWrDAFOxWO67zg&usqp=CAU"
              alt="avatar"
              size="xs"
              variant="circular"
              className="-ml-2.5 cursor-pointer border-2 border-white"
            />
          </Tooltip>
          <Tooltip content={"Javier"}>
            <Avatar
              src="http://www.kondinero.com/hubfs/Blog_Posts/Caractersticas-de-una-persona-emprendedora.jpg"
              alt="avatar"
              size="xs"
              variant="circular"
              className="-ml-2.5 cursor-pointer border-2 border-white"
            />
          </Tooltip>
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          4 socias han invertido
        </Typography>

        <Typography variant="small" className="font-normal text-blue-gray-600">
          Faltan 7 días
        </Typography>
        <Typography
          variant="small"
          className="flex items-center font-normal text-blue-gray-600"
        >
          <MapPinIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
          Barranquilla
        </Typography>
        <br />
        <SCButton onClick={() => navigate("/projects/project-detail")}>
          Ver proyecto
        </SCButton>
      </CardFooter>
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
