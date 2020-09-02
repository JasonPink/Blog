class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOpen ? "ON" : "OFF"}
      </button>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOpen ? "ON" : "OFF"}
      </button>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isOpen ? "ON" : "OFF"}
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
