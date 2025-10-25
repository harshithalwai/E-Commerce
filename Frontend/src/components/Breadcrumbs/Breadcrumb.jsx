import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const Breadcrumb = () => {
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="none"
            color="inherit"
            href="/"
            className="link"
            sx={{ fontSize: ".9rem" }}
          >
            MUI
          </Link>
          <Link
            sx={{ fontSize: ".9rem" }}
            underline="none"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link"
          >
            Core
          </Link>
          <Typography sx={{ fontSize: ".9rem" }}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default Breadcrumb;
