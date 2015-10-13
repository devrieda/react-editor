const React = require('react/addons');
const MenuButton = require('../MenuButton');

const ToggleMarkup    = require('../../helpers/Manipulation/ToggleMarkup');
const SelectedContent = require('../../helpers/SelectedContent');

const ItalicButton = React.createClass({
  statics: {
    isVisible: (content, selection) => {
      const selContent = new SelectedContent(selection, content);
      return !selContent.isHeader();
    }
  },

  getDefaultProps() {
    return {
      type: "em",
      text: "Italic",
      icon: "fa-italic"
    };
  },

  handlePress() {
    const guids   = this.props.selection.guids();
    const offsets = this.props.selection.offsets();
    const position = this.props.selection.position();

    const result = this._toggleMarkup().execute(guids, offsets, { type: this.props.type });

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

export default ItalicButton;
