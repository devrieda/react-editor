import Config from './Config';

// default keys
import ReturnKey from '../Keys/ReturnKey';
import DeleteKey from '../Keys/DeleteKey';
import BspaceKey from '../Keys/BspaceKey';
import DownKey from '../Keys/DownKey';
import UpKey from '../Keys/UpKey';
import BoldKey from '../Keys/BoldKey';
import ItalicKey from '../Keys/ItalicKey';
import CenterKey from '../Keys/CenterKey';
import H1Key from '../Keys/H1Key';
import H2Key from '../Keys/H2Key';
import H3Key from '../Keys/H3Key';
import QuoteKey from '../Keys/QuoteKey';
import UndoKey from '../Keys/UndoKey';
import RedoKey from '../Keys/RedoKey';
import OtherKey from '../Keys/OtherKey';

const defaults = [
  ReturnKey,
  DeleteKey,
  BspaceKey,
  DownKey,
  UpKey,
  BoldKey,
  ItalicKey,
  CenterKey,
  H1Key,
  H2Key,
  H3Key,
  QuoteKey,
  UndoKey,
  RedoKey,
  OtherKey,
];

const KeyConfig = Config({
  getInitialItems() {
    return defaults.slice(0);
  }
});

export default KeyConfig;
