var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
    {
        "id": 1,
        "text":'cheese'
    },
    {
        "id": 2,
        "text":'ham'
    },
    {
        "id": 3,
        "text":'onion'
    }
];
var List = React.createClass({
    render() {
        var listItems = ingredients.map((item) => {
                return <ListItem key={item.id} ingredient={item.text}/>
            });


        return (
            <ul> {listItems}</ul>
        )
    }
})

module.exports = List;