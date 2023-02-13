import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  BriefcaseIcon,
  BanknotesIcon,
  FolderIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "projects",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Proyectos",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Mis campañas",
        path: "/campains",
        element: <Profile />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Mi perfil",
        path: "/perfil",
        element: <Tables />,
      },
      {
        icon: <BriefcaseIcon {...icon} />,
        name: "Mi negocio",
        path: "/mi-negocio",
        element: <Notifications />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "Mis transacciones",
        path: "/mis-transacciones",
        element: <Notifications />,
      },
      {
        icon: <FolderIcon {...icon} />,
        name: "Mi portafolio",
        path: "/mi-portafolio",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Cerrar Sesión",
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   icon: <UserPlusIcon {...icon} />,
      //   name: "sign up",
      //   path: "/sign-up",
      //   element: <SignUp />,
      // },
    ],
  },
];

export default routes;
