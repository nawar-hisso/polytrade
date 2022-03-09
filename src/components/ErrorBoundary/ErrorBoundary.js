import React, { Component } from "react";
import { Alert, Stack, Container, Typography } from "@mui/material";

import styles from "./styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md" sx={styles.container}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error" icon={false} style={styles.alert}>
              <Typography style={{ flex: 1 }} variant="h4">
                Something went wrong!
              </Typography>
            </Alert>
          </Stack>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
