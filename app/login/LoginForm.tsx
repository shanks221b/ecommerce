"use client";

import NextLink from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Page = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
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
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (data: FormData) => {
    // Login API call goes here
    console.log(data);
  };

  return (
    <Page>
      <Card elevation={3}>
        <Typography
        variant="h4"
        sx={{
            textAlign: "center",
            mb: 3,
        }}
        >
        Login
        </Typography>

        <Form onSubmit={handleSubmit(submit)}>
          <TextField
            label="Email"
            type="email"
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
        sx={{
            textAlign: "center",
            mt: 2,
        }}
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
