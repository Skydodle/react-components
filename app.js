// create a GroceryList component
  // it contains an unordered list of 2 grocery items
  // render this component to the div tag in index.html with id of app



// create a reusable GroceryListItem compo that dynamically renders a given grocery item
// refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      //font-weight: this.state

    }
  ;
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.item}</li>
 //     <li> {this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Yogurt', 'Milk']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));








// see what the code look like in ES5 using Babel