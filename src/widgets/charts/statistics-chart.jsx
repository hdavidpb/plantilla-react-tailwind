import SCButton from "@/components/SCButton";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import ProgressBar from "@/components/ProgressBar";

export function StatisticsChart({ title, description, footer }) {
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
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
          <ProgressBar width={45} />
          {footer}
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
            4 socias han invertido
          </Typography>

          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
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
          <SCButton>Ver proyecto</SCButton>
        </CardFooter>
      )}
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
