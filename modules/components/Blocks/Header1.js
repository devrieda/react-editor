const React = require('react/addons');
const BaseBlock = require('./BaseBlock');

const Header1 = React.createClass({
  propTypes: BaseBlock.propTypes,

  statics: {
    matches: (block) => {
      return block.get('type') === 'h2';
    }
  },

  render() {
    return <BaseBlock {...this.props} />;
  }
});

export default Header1;
