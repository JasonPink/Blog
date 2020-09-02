class LoginControl extends React.Component {
  constrcutor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.state = { isLoggedIn: false };
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
