import React from "react";
import "./StickyHeader.css"
import { FaShoppingCart} from "react-icons/fa";


class StickyNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, scrolltop: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;

    this.setState({ height });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate(prevProps, prevState) {
    const scrollTop2 = window.pageYOffset;

    if (scrollTop2 !== prevState.scrolltop) {
      this.setState({ scrolltop: scrollTop2 });
    }
  }

  handleScroll(event) {
    const scrollTop = window.scrollTo;

    this.setState({
      scrolltop: scrollTop
    });
  }
  render() {
    return (
      <div>
        <header ref={(divElement) => (this.divElement = divElement)}>
          </header>
        <nav
          className={
            this.state.scrolltop > this.state.height
              ? "main-nav main-nav-scrolled"
              : "main-nav"
          }
        >
            <FaShoppingCart/>
        </nav>
      </div>
    );
  }
}
export default StickyNav;
