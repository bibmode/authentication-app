import styles from "../../styles/LoginBox.module.scss";

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

const SubmitButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "22px",
  borderRadius: "8px !important",
  paddingBlock: "8px",
}));

const Input = styled(TextField)(({ theme }) => ({
  borderRadius: "8px !important",
}));

const LoginBox = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <img src="devchallenges.svg" alt="logo" />
        <h1>Join thousands of learners from around the world</h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form>
          <Input
            id="email"
            variant="outlined"
            placeholder="Email"
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
            type="password"
            variant="outlined"
            placeholder="Password"
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
            variant="contained"
            disableElevation
            fullWidth
            sx={{ textTransform: "none" }}
          >
            Start coding now
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

        <h2>
          Adready a member? <Link href="/">Login</Link>
        </h2>
      </Container>
    </div>
  );
};

export default LoginBox;
