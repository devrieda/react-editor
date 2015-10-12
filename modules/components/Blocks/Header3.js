const React = require('react/addons');
const BaseBlock = require('./BaseBlock');

const Header3 = React.createClass({
  propTypes: BaseBlock.propTypes,

  statics: {
    matches: (block) => {
      return block.get('type') === 'h3';
    }
  },

  render() {
    return <BaseBlock {...this.props} />;
  }
});

module.exports = Header3;
