import * as React from "react";
import { Container, Text } from "@mantine/core";
import { useStyles } from "./demo.styles";

export const Demo: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A fully featured{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            React + Vite
          </Text>{" "}
          template for building SPAs
        </h1>

        <Text className={classes.description} color="dimmed">
          Build internal Applications using Mantine, React, Typescript,
          ReactQuery and a bunch of other fun tools!
        </Text>

        <Text className={classes.description}>
          To get started, just edit components/Demo or replace it with your own
          component in App.tsx
        </Text>
      </Container>
    </div>
  );
};
