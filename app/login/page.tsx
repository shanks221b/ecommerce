"use client";

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import NextLink from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Page = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f5f5",
});


const Card = styled(Paper)({
  width: 400,
  padding: 32,
});


const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});


const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required"),
});


type FormData = {
  email: string;
  password: string;
};


export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });


  const submit = (data: FormData) => {
    console.log(data);
  };


  return (
    <Page>

      <Card elevation={3}>

        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Login
        </Typography>


        <Form onSubmit={handleSubmit(submit)}>


          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />


          <TextField
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />


          <Button
            variant="contained"
            type="submit"
          >
            Login
          </Button>


        </Form>


        <Typography
          textAlign="center"
          mt={2}
        >
          Don't have an account?{" "}

          <Link
            component={NextLink}
            href="/signup"
          >
            Sign Up
          </Link>

        </Typography>


      </Card>

    </Page>
  );
}
