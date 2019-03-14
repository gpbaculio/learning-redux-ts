import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
interface State {
  user: string;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { user: 'Glendon' };
  }
  render() {
    const { onIncrement, onDecrement, name, enthusiasmLevel = 1 } = this.props;
    const { user } = this.state;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          {user}, Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
}

export default Hello;

function getExclamationMarks(numChars = 1) {
  return Array(numChars + 1).join('!');
}
