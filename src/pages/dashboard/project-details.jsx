import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ProgressBar from "@/components/ProgressBar";
import SCButton from "@/components/SCButton";

export function ProjectDetailPage() {
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
          <div className="ml-1 mt-10 flex flex-col justify-between gap-3 sm:items-start md:flex-row md:items-center">
            <div className="flex max-w-lg flex-col gap-1">
              <Typography variant="h3" className=" cursor-pointer text-black">
                Sombreritos curramberos
              </Typography>
              <Typography className="text-lg text-gray-800">
                Javier Polo
              </Typography>
              <div className="flex items-center justify-center gap-2">
                <ProgressBar width={45} className="flex-1" />
                <Typography className="text-sm font-bold text-socias-pink">
                  $ 20,000.000
                </Typography>
              </div>
              <Typography className="text-sm text-gray-800">
                Faltan 7 días
              </Typography>
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <MapPinIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                Barranquilla
              </Typography>
            </div>
            <div className=" flex flex-row items-center justify-center gap-4">
              <SCButton>$ Invertir</SCButton>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start */}
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3">
        <div className="col-start-1 col-end-3 flex w-full flex-col items-center justify-start gap-10">
          <Card className="w-full" color="transparent" shadow={false}>
            <CardHeader>
              <Typography
                variant="h4"
                className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black "
              >
                Sobre el proyecto
              </Typography>
              <CardBody>
                <Typography variant="paragraph" className="text-gray-800">
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
          <Card className="w-full" color="transparent" shadow={false}>
            <CardHeader>
              <Typography
                variant="h4"
                className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black "
              >
                Fotos
              </Typography>
              <CardBody className="flex flex-wrap items-start justify-start gap-4">
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow  rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
                <img
                  className="h-20 w-24 flex-grow rounded-xl object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDEIWJRacIi-qRu-EtyEjHenJxzJTW_P11w&usqp=CAU"
                  alt="algo 3"
                />
              </CardBody>
            </CardHeader>
          </Card>
        </div>
        <div className="mt-11 flex w-full flex-col gap-10 md:mt-0">
          <Card className="w-full " color="transparent" shadow={false}>
            <CardHeader>
              <Typography
                variant="h4"
                className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black"
              >
                Sobre Javier Polo
              </Typography>
              <CardBody className="flex flex-col items-center justify-start gap-3">
                <div className="flex w-full items-center justify-start gap-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus asperiores magnam soluta vitae reiciendis adipisci
                  nisi aspernatur dolorem quia officiis.
                </div>
              </CardBody>
            </CardHeader>
          </Card>
          <Card className="w-full " color="transparent" shadow={false}>
            <CardHeader>
              <Typography
                variant="h4"
                className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black"
              >
                Sobre el negocio
              </Typography>
              <CardBody className="flex flex-col items-center justify-start gap-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                impedit rerum recusandae porro qui libero deleniti enim earum
                sunt amet.
              </CardBody>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
