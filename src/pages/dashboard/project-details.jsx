import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BanknotesIcon,
  SparklesIcon,
  AcademicCapIcon,
  BoltIcon,
  CheckBadgeIcon,
  ShieldExclamationIcon,
  GlobeAmericasIcon,
  ArrowsPointingInIcon,
  TagIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
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
          className="absolute top-20 left-20 border-2 border-solid border-white"
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
              <div className="flex items-center justify-start gap-3">
                <Typography className="text-lg font-bold text-gray-800">
                  Javier Polo
                </Typography>
                <Typography
                  variant="small"
                  className="rounded-md border-2 border-socias-pink px-3  font-bold text-socias-pink"
                >
                  Socia
                </Typography>
              </div>

              <div className="flex items-center justify-center gap-2">
                <ProgressBar width={45} className="flex-1" />
                <Typography className="text-sm font-bold text-socias-pink">
                  COP 20,000.000
                </Typography>
              </div>
              <Typography
                variant="small"
                className="w-max rounded-md border-2 border-socias-pink px-3 font-bold text-socias-pink"
              >
                7 días restantes
              </Typography>
              <Typography
                variant="small"
                className="flex items-center font-bold text-socias-purple "
              >
                <MapPinIcon
                  strokeWidth={2}
                  className="h-4 w-4 font-bold text-inherit text-socias-purple "
                />
                Barranquilla
              </Typography>
            </div>
            <div className=" flex flex-row items-center justify-center gap-4">
              <SCButton className="flex w-36 items-center justify-center gap-3">
                <BanknotesIcon className="text-white" width={20} />
                <h1>Invertir</h1>
              </SCButton>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start */}
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3">
        <div className="col-start-1 col-end-3 flex w-full flex-col items-center justify-start gap-10">
          <Card className="w-full" color="transparent" shadow={false}>
            <CardHeader>
              <div className="flex items-center justify-start gap-3 border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black ">
                <SparklesIcon width={20} className="text-socias-purple" />
                <Typography variant="h4">Sobre el proyecto</Typography>
              </div>
              <CardBody className="flex flex-col items-start justify-start gap-4">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <AcademicCapIcon width={16} className="text-socias-pink" />
                    <Typography variant="h6">Objetivo de la Campaña</Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <BoltIcon width={16} className="text-socias-pink" />
                    <Typography variant="h6">
                      ¿Por qué confiar en nuestro proyecto?
                    </Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <CheckBadgeIcon width={16} className="text-socias-pink" />
                    <Typography variant="h6">
                      ¿Cómo lo haremos realidad?
                    </Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <ShieldExclamationIcon
                      width={16}
                      className="text-socias-pink"
                    />
                    <Typography variant="h6">
                      ¿Cuáles son los riesgos?
                    </Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <GlobeAmericasIcon
                      width={16}
                      className="text-socias-pink"
                    />
                    <Typography variant="h6">Impacto Social</Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <ArrowsPointingInIcon
                      width={16}
                      className="text-socias-pink"
                    />
                    <Typography variant="h6">Tipo de Proyecto</Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <TagIcon width={16} className="text-socias-pink" />
                    <Typography variant="h6">Categoria</Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex items-center justify-start gap-3 text-black ">
                    <ShoppingBagIcon width={16} className="text-socias-pink" />
                    <Typography variant="h6">Tipo de venta</Typography>
                  </div>
                  <p className="flex w-full items-center justify-start gap-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus asperiores magnam soluta vitae reiciendis adipisci
                    nisi aspernatur dolorem quia officiis.
                  </p>
                </div>
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
              <div className="flex items-center justify-start gap-3 border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black ">
                <UserCircleIcon width={20} className="text-socias-purple" />
                <Typography variant="h4">Sobre la socia</Typography>
              </div>
              <CardBody className="flex flex-col items-start justify-start gap-3">
                <div className="flex w-full items-center justify-start gap-2">
                  <Typography className="text-2xl font-bold text-gray-800">
                    Javier Polo
                  </Typography>
                  <Typography
                    variant="small"
                    className="w-max rounded-xl border-2 border-socias-purple px-3 py-1 font-bold text-socias-purple"
                  >
                    44 Años
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Brief de la socia
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Ventas
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Experiencia
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    15 Años
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Logros
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Gerencia
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Ubicación
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Barranquilla - Colombia
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Redes Sociales
                  </Typography>
                  <div className="flex flex-wrap items-center justify-start gap-3">
                    <BsFacebook
                      size={20}
                      className="cursor-pointer text-socias-purple transition-colors hover:text-socias-pink"
                    />
                    <BsInstagram
                      size={20}
                      className="cursor-pointer text-socias-purple transition-colors hover:text-socias-pink"
                    />
                    <BsTwitter
                      size={20}
                      className="cursor-pointer text-socias-purple transition-colors hover:text-socias-pink"
                    />
                    <BsLinkedin
                      size={20}
                      className="cursor-pointer text-socias-purple transition-colors hover:text-socias-pink"
                    />
                  </div>
                </div>
              </CardBody>
            </CardHeader>
          </Card>
          <Card className="w-full " color="transparent" shadow={false}>
            <CardHeader>
              <div className="flex items-center justify-start gap-3 border-b-2 border-gray-300 pl-6 pt-6 pb-1 text-black ">
                <StarIcon width={20} className="text-socias-purple" />
                <Typography variant="h4">Sobre el negocio</Typography>
              </div>
              <CardBody className="flex flex-col items-start justify-start gap-3">
                <Typography className="text-2xl font-bold text-gray-800">
                  Sombreritos curramberos
                </Typography>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Descripción del Negocio
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis mollitia consectetur pariatur suscipit cumque
                    repellendus, labore rerum sint quae, explicabo, cum iure
                    quidem rem fugiat omnis dolor natus libero aperiam.
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Representante Legal
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    NEERO
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Industria
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Ventas
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Antiguedad
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    15 Años
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Equipo
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Sombreritos al poder
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Ingresos del ultimo año
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    COP 150,000.000
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <Typography className="text-lg font-bold text-gray-800">
                    Lugar Nacimiento
                  </Typography>
                  <Typography className="text-sm font-normal text-gray-800">
                    Barranquilla - Colombia
                  </Typography>
                </div>
              </CardBody>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
