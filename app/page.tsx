"use client";

import { useEffect, useState } from "react";
import IntroScreen from "../components/IntroScreen";
import KeyDisplay from "../components/KeyDisplay";
import Lobby from "../components/Lobby";
import Room from "../components/Room";
import ObjectView from "../components/ObjectView";
import { world } from "../data/world";
import { initialGameState } from "../data/initialGameState";
import type { GameState } from "../types/game";
import { resolveNode } from "../data/rules";

type GameView =
  | "INTRO"
  | "KEY"
  | "LOBBY"
  | "NODE";

export default function Home() {
  const [view, setView] =
    useState<GameView>("INTRO");

  // const [playerKey, setPlayerKey] =
  //   useState<string | null>(null);

  // const [navigationStack, setNavigationStack] =
  //   useState<string[]>([]);

  //   const [exploredNodes, setExploredNodes] =
  // useState<string[]>([]);
  const [gameState, setGameState] =
  useState<GameState>(initialGameState);

  function generateKey() {
    const newKey = crypto
      .randomUUID()
      .replaceAll("-", "")
      .slice(0, 8)
      .toUpperCase();

setGameState((current) => ({
  ...current,

  player: {
    ...current.player,
    key: newKey,
  },
}));

setView("KEY");
  }

  function enterLobby() {
    setView("LOBBY");
  }

function enterRoom(roomName: string) {
  const roomId = roomName.replaceAll(
    " ",
    "_"
  );

  setGameState((current) => ({
    ...current,

    player: {
      ...current.player,

      navigationStack: [roomId],

      exploredNodes:
        current.player.exploredNodes.includes(roomId)
          ? current.player.exploredNodes
          : [
              ...current.player.exploredNodes,
              roomId,
            ],
    },
  }));

  setView("NODE");
}

function openNode(nodeId: string) {
  const node = world[nodeId];

  setGameState((current) => ({
    ...current,

    player: {
      ...current.player,

      navigationStack: [
        ...current.player.navigationStack,
        nodeId,
      ],

      exploredNodes:
        current.player.exploredNodes.includes(nodeId)
          ? current.player.exploredNodes
          : [
              ...current.player.exploredNodes,
              nodeId,
            ],

      discoveredClues:
        node?.clue &&
        !current.player.discoveredClues.includes(
          node.clue
        )
          ? [
              ...current.player.discoveredClues,
              node.clue,
            ]
          : current.player.discoveredClues,
    },
  }));

  setView("NODE");
}

function goBack() {
  setGameState((current) => {
    const stack =
      current.player.navigationStack;

    if (stack.length <= 1) {
      setView("LOBBY");

      return {
        ...current,

        player: {
          ...current.player,
          navigationStack: [],
        },
      };
    }

    return {
      ...current,

      player: {
        ...current.player,

        navigationStack: stack.slice(0, -1),
      },
    };
  });
}

  if (view === "INTRO") {
    return (
      <IntroScreen
        onEnter={generateKey}
      />
    );
  }

  if (view === "KEY" && gameState.player.key) {
    return (
<KeyDisplay
  playerKey={gameState.player.key}
  onContinue={enterLobby}
/>
    );
  }

if (view === "LOBBY") {
  return (
    <Lobby
      clues={gameState.player.discoveredClues}
      onEnterRoom={enterRoom}
    />
  );
}

  if (view === "NODE") {
const navigationStack =
  gameState.player.navigationStack;

const currentNodeId =
  navigationStack[
    navigationStack.length - 1
  ];

    const node = world[currentNodeId];

    // let currentNode = node;
    // if (
    //   node &&
    //   node.id === "LAMP" &&
    //   gameState.player.discoveredClues.includes("03:17")
    // ) {
    //   currentNode = {
    //     ...node,
    //     description:
    //       "The lamp is on.",
    //   };
    // }
    

if (!node) {
  return (
    <main className="page">
      <div className="page-inner">
        <p>
          ERROR: NODE NOT FOUND.
        </p>

        <button
          className="binary-button"
          onClick={() => {
            setView("LOBBY");

            setGameState((current) => ({
              ...current,

              player: {
                ...current.player,
                navigationStack: [],
              },
            }));
          }}
        >
          [ back ]
        </button>
      </div>
    </main>
  );
}

const currentNode = resolveNode(
  node,
  gameState
);

    if (currentNode.id === "ROOM_01") {
      return (
        <Room
          node={currentNode}
          onBack={goBack}
          onOpenChild={openNode}
        />
      );
    }

    return (
      <ObjectView
        node={currentNode}
        navigationStack={navigationStack}
        onBack={goBack}
        onOpenChild={openNode}
      />
    );
  }

  return null;
}