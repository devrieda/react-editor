var React = require('react/addons');
var MenuButton = require('../MenuButton');

var ToggleBlockType = require('../../helpers/Manipulation/ToggleBlockType');

var H2Button = React.createClass({
  statics: {
    isVisible: () => true
  },

  propTypes: MenuButton.propTypes,

  getDefaultProps() {
    return {
      type: "h3",
      text: "H2",
      icon: null
    };
  },

  handlePress() {
    var guids   = this.props.selection.guids();
    var offsets = this.props.selection.offsets();
    var position = this.props.selection.position();

    var result = this._toggleBlockType().execute(guids, offsets, { type: this.props.type });

    return { content: result.content, position: position };
  },

  _toggleBlockType() {
    return new ToggleBlockType(this.props.content);
  },

  render() {
    return (
      <MenuButton {...this.props} onPress={this.handlePress} />
    );
  }
});

module.exports = H2Button;
