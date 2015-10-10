var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var Immutable = require('immutable');
var cx = require("classnames");

var Paragraph  = require('./Blocks/Paragraph');
var Header1    = require('./Blocks/Header1');
var Header2    = require('./Blocks/Header2');
var Header3    = require('./Blocks/Header3');
var Blockquote = require('./Blocks/Blockquote');
var List       = require('./Blocks/List');
var Image      = require('./Blocks/Image');
var Youtube    = require('./Blocks/Youtube');

// all block types
var blockTypes = [
  Paragraph, Header1, Header2, Header3, Blockquote, List, Image, Youtube
];

var { object, string, instanceOf } = React.PropTypes;

var Section = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    id: string,
    blocks: instanceOf(Immutable.List),
    meta: instanceOf(Immutable.Map),
    guids: object,
    offsets: object
  },

  getDefaultProps() {
    return {
      id: "",
      blocks: Immutable.List(),
      meta: Immutable.Map(),
      guids: {},
      offsets: {}
    };
  },

  // find which type of block matches
  _renderBlock(block) {
    var matching = blockTypes.filter( (BlockClass) => {
      return BlockClass.matches(block);
    });

    // default to P
    var BlockType = matching[0] || Paragraph;

    return (
      <BlockType
        key={block.get('id')}
        id={block.get('id')}
        type={block.get('type')}
        text={block.get('text')}
        meta={block.get('meta')}
        data={block.get('data')}
        markups={block.get('markups')}
        blocks={block.get('blocks')}
        guids={this.props.guids}
        offsets={this.props.offsets}
      />
    );
  },

  render() {
    var blocks = this.props.blocks.map( (block, i) => {
      if (i === 0) { block = block.setIn(['meta', 'first'], true); }
      return this._renderBlock(block);
    });

    var classNames = cx('arc-Editor-Section', {
      'arc-Editor-Section--first': this.props.meta.get('first')
    });

    return (
      <section className={classNames} name={this.props.id}>
        <div contentEditable="false" className="arc-Editor-Section__divider">
          <hr className="arc-Editor-Section__hr" />
        </div>

        <div className="arc-Editor-Section__content">
          <div className="arc-Editor-Section__inner">
            {blocks}
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Section;
