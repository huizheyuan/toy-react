import { createElement, Component, render } from "./toy-react.js";

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my componet</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id='a' class='aaa'>
    <div>aaa</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);