import styles from "../../styles/LoginBox.module.scss";
import { AppContext } from "./Layout";

import {
  Button,
  Container,
  InputAdornment,
  TextField,
  styled,
  IconButton,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//styling material ui
const SubmitButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "22px",
  borderRadius: "8px !important",
  paddingBlock: "8px",
}));

const Input = styled(TextField)(({ theme }) => ({
  borderRadius: "8px !important",
}));

//form validation
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginBox = () => {
  const { toggleForm, setToggleForm } = useContext(AppContext);

  const clearValues = () => {
    formik.values.email = "";
    formik.values.password = "";
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);

      // clearValues();
    },
  });

  return (
    <div className={styles.wrapper}>
      <Container maxWidth="sm">
        <img src="devchallenges.svg" alt="logo" />
        <h1>
          {toggleForm
            ? "Join thousands of learners from around the world"
            : "Login"}
        </h1>
        {toggleForm && (
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            variant="outlined"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2, mt: 3.7 }}
          />
          <Input
            id="password"
            name="password"
            type="password"
            variant="outlined"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          <SubmitButton
            type="submit"
            id="submitBtn"
            variant="contained"
            disableElevation
            fullWidth
            sx={{ textTransform: "none" }}
          >
            {toggleForm ? "Start coding now" : "Login"}
          </SubmitButton>
        </form>

        <h2>or continue with these social profile</h2>

        <div className={styles.icons}>
          <IconButton aria-label="google">
            <GoogleIcon />
          </IconButton>

          <IconButton aria-label="facebook">
            <FacebookIcon />
          </IconButton>

          <IconButton aria-label="twitter">
            <TwitterIcon />
          </IconButton>

          <IconButton aria-label="github">
            <GitHubIcon />
          </IconButton>
        </div>

        {toggleForm ? (
          <h2>
            Already a member? <a onClick={() => setToggleForm(false)}>Login</a>
          </h2>
        ) : (
          <h2>
            {`${"Don't have an account yet?"}`}{" "}
            <a onClick={() => setToggleForm(true)}>Register</a>
          </h2>
        )}
      </Container>
    </div>
  );
};

export default LoginBox;
