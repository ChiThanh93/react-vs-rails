class BaseComponent extends React.Component{
  constructor(props) {
    super(props);
    this.params = props.params;
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false;

    if (this.state != nextState) {
      shouldUpdate = true;
    } else if (this.props != nextProps) {
      for (let props of Object.keys(this.props)) {
        if (this.props[prop] != nextProps[prop]
          && typeof this.props[prop] !== "function") {
          shouldUpdate = true;
          break;
        }
      }
    }
    return shouldUpdate;
  }
}
module.exports = BaseComponent;
