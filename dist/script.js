function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

marked.setOptions({
  breaks: true });



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ markdown: e.target.value }));this.state = { markdown: placeholder };this.handleChange = this.handleChange.bind(this);}

  render() {
    console.log(this.state.markdown);
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "header" },
      React.createElement("span", { id: "title" }, React.createElement("i", { class: "fab fa-react" }), " React Markdown Previewer")),

      React.createElement("div", { className: "container" },
      React.createElement("div", { id: "editorWrapper" },
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })),

      React.createElement("div", { id: "previewWrapper" },
      React.createElement(Preview, { markdown: this.state.markdown }))),


      React.createElement("div", { id: "footer" },
      React.createElement("span", { id: "myName" }, "James Myers 2020"))));



  }}
;

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.markdown);
    return (
      React.createElement("textarea", { id: "editor", type: "text", value: this.props.markdown, onChange: this.props.onChange }));

  }}
;

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.markdown) } }));

  }}
;

const placeholder =
`# Welcome to my React Markdown Previewer!

# this is an h1 header
## h2
### h3
#### h4
##### h5 (i think you get the point..)
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`

function multiLineCode() {
  console.log("this is multiline code!")
}
\`\`\`
  
**place your text between asterisks to make it bold**
_Or between underscores to make it italic_.
**_Or both at the same time!_**
~~crossing stuff out can be fun too~~.

You can also add [links](https://codepen.io/jtmyers1983), and
> Block Quotes!


- Here we have a simple list.
  - with bulleted points.
     - and different indentation levels.
        - that's pretty much it..


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

* And last but not least, let's not forget embedded images:

![React Logo](https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg)
`;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));