"use client";

import NextLink from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { schema, FormData } from "./types";
import { Page, Card, Form } from "./styles";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const submit = (data: FormData) => {
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
          Sign Up
        </Typography>

        <Form onSubmit={handleSubmit(submit)}>
          <TextField
            label="First Name"
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            label="Last Name"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />

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

          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </Form>

        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
          }}
        >
          Already have an account?{" "}
          <Link component={NextLink} href="/login">
            Login
          </Link>
        </Typography>
      </Card>
    </Page>
  );
}
