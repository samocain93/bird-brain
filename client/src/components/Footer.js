import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        bottom: "0",
        position: "fixed",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item align="center" sx={{ color: "#FFFFFF" }} xs={12}>
            <h4>Made with love!</h4>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://github.com/bravenbright"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
              <Typography
                variant="p"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                bravenbright
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://github.com/CxLos"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
              <Typography
                variant="p"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                CxLos
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://github.com/marcheType"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
              <Typography
                variant="p"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                marcheType
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://github.com/mbartnett"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
              <Typography
                variant="p"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                mbartnett
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href="https://github.com/samocain93"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
              <Typography
                variant="p"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                samocain93
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
