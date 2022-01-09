import { Component } from "react";
import checkImg from './assets/check-image.jpg';

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            inputText: "",
            groceryArray: []
        }
    }

    onChangeEvent(e) {
        this.setState({inputText: e});
    }

    addGrocery(e) {
        if (e === "") {
            alert("Please enter an item");
        }
        else {
            let listArray = this.state.groceryArray;
            listArray.push(e);
            this.setState({groceryArray: listArray, inputText: ""});
        }
    }

    deleteGrocery(e) {
        let listArray = this.state.groceryArray;
        listArray = [];
        this.setState({groceryArray: listArray});
    }

    crossedWord(e) {
        const itemLi = e.target;
        itemLi.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="What do you want to buy today?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.inputText} />
                    </div>
                    <div className="container">
                        <button className="btn btnAdd" onClick={() => this.addGrocery(this.state.inputText)}>Add</button>
                    </div>
                    <div className="container">
                        <ul>
                            {this.state.groceryArray.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}>
                                    <img src = { checkImg } width="30px" alt="checked" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <button className="btn btnDel" onClick={() => this.deleteGrocery()} >Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}