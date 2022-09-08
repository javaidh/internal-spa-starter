import * as React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { theme } from "./styles/theme";
import { Demo } from "./components";

const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Demo />
    </MantineProvider>
  );
};

export default App;
