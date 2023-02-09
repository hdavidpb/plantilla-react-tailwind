import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import routes from "@/routes";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <Menu>
            <MenuHandler>
              <Button variant="text" color="blue-gray">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  variant="circular"
                />
              </Button>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Link
                  to="/projects/perfil"
                  className="flex w-full items-center justify-center gap-3"
                >
                  <UserCircleIcon className="h-5" />
                  <Typography color="inherit" className="capitalize">
                    Mi Perfil
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem className="flex items-center gap-4">
                <div
                  onClick={() => setOpenConfigurator(dispatch, true)}
                  className="flex w-full items-center justify-center gap-5"
                >
                  <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />

                  <Typography
                    color="inherit"
                    className="text-center capitalize"
                  >
                    Ajustes
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center justify-center gap-4">
                <Link to="/auth/sign-in" className="w-full">
                  <Typography
                    color="inherit"
                    className="text-center capitalize"
                  >
                    Cerrar Sesión
                  </Typography>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
