import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://www.socias.org/wp-content/uploads/2022/11/bg_hero.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center"
          >
            <Avatar
              src="https://www.socias.org/wp-content/uploads/2022/08/logotipo.svg"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input color="pink" type="email" label="Email" size="lg" />
            <Input color="pink" type="password" label="Contraseña" size="lg" />
            <div className="-ml-2.5">
              <Checkbox color="pink" label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              style={{
                boxShadow: "none",
                backgroundColor: "rgb(255, 119, 175 )",
                color: "white",
              }}
              fullWidth
              onClick={() => navigate("/projects/home")}
            >
              Ingresar
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  style={{
                    color: "rgb(255, 119, 175 )",
                  }}
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
