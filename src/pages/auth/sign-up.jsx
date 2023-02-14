import { Link } from "react-router-dom";
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
import SCButton from "@/components/SCButton";

export function SignUp() {
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
            <Input color="pink" label="Nombre" size="lg" />
            <Input color="pink" type="email" label="Email" size="lg" />
            <Input color="pink" type="password" label="Contraseña" size="lg" />
            <div className="-ml-2.5">
              <Checkbox color="pink" label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <SCButton fullWidth>Sign Up</SCButton>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  style={{ color: "rgb(255, 119, 175 )" }}
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
