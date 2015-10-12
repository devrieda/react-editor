var React = require('react/addons');
var MenuButton = require('../MenuButton');

var ToggleMarkup = require('../../helpers/Manipulation/ToggleMarkup');
var SelectedContent = require('../../helpers/SelectedContent');

var BoldButton = React.createClass({
  statics: {
    isVisible: (content, selection) => {
      var selContent = new SelectedContent(selection, content);
      return !selContent.isHeader();
    }
  },

  propTypes: MenuButton.propTypes,

  getDefaultProps() {
    return {
      type: "strong",
      text: "Bold",
      icon: "fa-bold"
    };
  },

  handlePress() {
    var guids   = this.props.selection.guids();
    var offsets = this.props.selection.offsets();
    var position = this.props.selection.position();

    var result = this._toggleMarkup().execute(guids, offsets, { type: this.props.type });

    return { content: result.content, position: position };
  },

  _toggleMarkup() {
    return new ToggleMarkup(this.props.content);
  },

  render() {
    return (
      <MenuButton {...this.props} onPress={this.handlePress} />
    );
  }
});

module.exports = BoldButton;
