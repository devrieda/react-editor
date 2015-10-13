const React = require('react/addons');
const BaseBlock = require('./BaseBlock');

const Paragraph = React.createClass({
  propTypes: BaseBlock.propTypes,

  statics: {
    matches: (block) => {
      return block.get('type') === 'p';
    }
  },

  render() {
    return <BaseBlock {...this.props} />;
  }
});

export default Paragraph;
