import Block from "./Quote";
import Key from "./QuoteKey";
import Button from "./QuoteButton";

const Plugin = {
  installBlocks(config) {
    config.use(Block);
  },

  installKeys(config) {
    config.use(Key);
  },

  installMenuButtons(config) {
    config.use(Button);
  }
};

export default Plugin;
