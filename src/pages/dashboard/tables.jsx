import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import ProgressBar from "@/components/ProgressBar";

export function Tables() {
  return (
    <div className="w-100 mt-12 mb-8 flex  flex-col gap-12">
      <Card>
        <CardHeader>
          <img
            className="h-40 w-full object-cover"
            src="https://www.socias.org/wp-content/uploads/jet-engine-forms/906/2023/02/20230202_174811-scaled.jpg"
            alt="project-1"
          />
        </CardHeader>
        <Avatar
          className="absolute top-20 left-20  "
          src="https://uploads-ssl.webflow.com/619916db2569bf79a09da655/61aa7d15a514f23b6b751b01_javier1.jpg"
          variant="circular"
          size="xxl"
        />
        <CardBody>
          <div className="ml-1 mt-10 flex flex-col justify-between gap-3 sm:items-start md:flex-row md:items-start">
            <div className="flex flex-col">
              <Typography variant="h3" className="text-black">
                Javier Polo
              </Typography>
              <Typography className="text-lg text-gray-800">
                Carpintero
              </Typography>
              <Typography className="text-sm text-gray-800">
                Barranquilla
              </Typography>
            </div>
            <div className=" flex flex-row items-center gap-4">
              <Typography variant="h1" className="mr-2 text-lg text-gray-900">
                Sigueme
              </Typography>
              <Typography className="text-sm text-gray-900">Ing</Typography>
              <Typography className="text-sm text-gray-900">Fb</Typography>
              <Typography className="text-sm text-gray-900">Tw</Typography>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start">
        <Card className="flex-1" color="transparent" shadow={false}>
          <CardHeader>
            <Typography
              variant="h4"
              className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black "
            >
              Sobre Mi
            </Typography>
            <CardBody>
              <Typography variant="p" className="text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                aperiam fuga sunt quos sed nisi reiciendis, quas aliquid dicta
                corporis id impedit nihil explicabo qui ut dolor cumque velit.
                Aut in, eligendi iure maxime at veniam quod aspernatur dolore
                non? corporis id impedit nihil explicabo qui ut dolor cumque
                velit. Aut in, eligendi iure maxime at veniam quod aspernatur
                dolore non?
              </Typography>
            </CardBody>
          </CardHeader>
        </Card>
        <Card
          className="mt-11 w-full md:mt-0 md:w-80"
          color="transparent"
          shadow={false}
        >
          <CardHeader>
            <Typography
              variant="h4"
              className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black"
            >
              Completa tu perfil 75%
            </Typography>
            <CardBody>
              <ProgressBar width={75} />
              <Typography variant="p" className="text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                aperiam fuga sunt quos sed nisi reiciendis, quas aliquid dicta
                corporis id impedit nihil explicabo qui ut dolor cumque velit.
                Aut in, eligendi iure maxime at veniam quod aspernatur dolore
                non? corporis id impedit nihil explicabo qui ut dolor cumque
                velit. Aut in, eligendi iure maxime at veniam quod aspernatur
                dolore non?
              </Typography>
            </CardBody>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Tables;
