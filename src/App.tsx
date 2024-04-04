import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  return <></>;
}

export default App;
