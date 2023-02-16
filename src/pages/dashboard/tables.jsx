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
              <Typography
                variant="h3"
                className=" cursor-pointer text-black transition-all hover:text-blue-700"
              >
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
      {/* mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start */}
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3">
        <div className="col-start-1 col-end-3 flex w-full flex-col items-center justify-start gap-10">
          <Card className="w-full" color="transparent" shadow={false}>
            <CardHeader>
              <Typography
                variant="h4"
                className="border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black "
              >
                Sobre Mi
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
                Completa tu perfil 75%
              </Typography>
              <CardBody className="flex flex-col items-center justify-start gap-3">
                <ProgressBar width={75} />
                <div className="flex w-full items-center justify-start gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-900">
                    ✓
                  </div>
                  <Typography
                    variant="paragraph"
                    className="text-black transition-all "
                  >
                    Foto de Perfil
                  </Typography>
                </div>
                <div className="flex w-full items-center justify-start gap-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-900">
                    X
                  </div>
                  <Typography
                    variant="paragraph"
                    className=" cursor-pointer text-black transition-all hover:text-blue-700"
                  >
                    Correo electronico
                  </Typography>
                </div>
                <div className="flex w-full items-center justify-start gap-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-900">
                    X
                  </div>
                  <Typography
                    variant="paragraph"
                    className=" cursor-pointer text-black transition-all hover:text-blue-700"
                  >
                    Documentación
                  </Typography>
                </div>
                <div className="flex w-full  items-center justify-start gap-1 ">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-900">
                    X
                  </div>
                  <Typography
                    variant="paragraph"
                    className=" cursor-pointer text-black transition-all hover:text-blue-700"
                  >
                    Dirección
                  </Typography>
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
                Conexiones
              </Typography>
              <CardBody className="flex flex-col items-center justify-start gap-3">
               
                <div className="flex w-full items-center justify-start gap-2">
                  <Avatar
                    variant="circular"
                    src="https://www.hoydinero.com/__export/1635633231899/sites/elimparcial/img/2021/10/30/mujeres_emprendedoras_1.jpg_1345759582.jpg"
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <Typography variant="h6">Julia Marineli</Typography>
                    <Typography variant="small">Emprendedora</Typography>
                  </div>
                </div>
                <div className="flex w-full items-center justify-start gap-2">
                  <Avatar
                    variant="circular"
                    src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/imujer/c/consejos-de-belleza-para-una-mujer-de-negocios-2.jpg"
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <Typography variant="h6">Adriana Copenague</Typography>
                    <Typography variant="small">Emprendedora</Typography>
                  </div>
                </div>
                <div className="flex w-full items-center justify-start gap-2">
                  <Avatar
                    variant="circular"
                    src="https://akns-images.eonline.com/eol_images/Entire_Site/2021118/rs_1024x759-211208115534-imparables_podcast.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <Typography variant="h6">Rosa Mel</Typography>
                    <Typography variant="small">Emprendedora</Typography>
                  </div>
                </div>
                <div className="flex w-full items-center justify-start gap-2">
                  <Avatar
                    variant="circular"
                    src="https://muchosnegociosrentables.com/wp-content/uploads/2015/11/mujer-emprendedora-sonriendo.jpg"
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <Typography variant="h6">Mocica Gal Gadoth</Typography>
                    <Typography variant="small">Emprendedora</Typography>
                  </div>
                </div>
              </CardBody>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tables;
