import React, { Component } from 'react';
import '../css/TypeWriter.css';

const separator = '~$ ';

class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: separator,
      hideCursor: false
    };
    this.nextLine = this.nextLine.bind(this);
  }

  nextLine() {
    setTimeout(() => {
      this.setState({hideCursor: true});
      this.props.onFinish();
    }, 1000);
  }

  type(text, speed, delay) {
    let str = separator;
    let typeSpeed = 0;
    let i = 0;

    text.split('').forEach(c => {
      typeSpeed += speed;
      setTimeout(() => {
        i++;
        str += c;
        this.setState({text: str});
        if (i === text.length && this.props.isFirst) {
          this.nextLine();
        }
      }, delay + typeSpeed);
    })
  }

  componentDidMount() {
    this.type(
      this.props.text,
      this.props.speed,
      this.props.delay
    );
  }

  render() {
    return (
      <div className="typewriter">
        {this.state.text}
        {!this.state.hideCursor ? <span>&nbsp;</span> : null}
      </div>
    )
  }

}

TypeWriter.defaultProps = {
  text: 'Type something. Anything.',
  speed: 60,
  delay: 700,
}

export default TypeWriter;