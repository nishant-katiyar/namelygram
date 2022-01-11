import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require('@rstacruz/startup-name-generator'); 

class App extends React.Component
{

    state = {
        headerText: "NamelyGram !",
        headerExpanded: true,
        suggestedNames: []      
    };
    
    handleInputChange = (inputText) =>
    {

        // console.log()
        // alert("I have been called");
        // console.log(`Input Text - ${inputText}`);
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : []
        });
    }

    render()
    {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}
export default App;
// function App()
// {
    //     return <h1>This is my Functional component</h1>;
// }


// {/* <h3>{this.state.headerText}</h3>
// <button onClick={() =>
// {
    //     this.setState({
        //         headerText: "Wooooah!! Magic Just happened...."
        //     })
        // }
        
    // }>Click here to see the Magic.</button> */}


    // constructor()
    // {
    //     super();
    //     this.state = {
    //         headerText: "NamelyGram !"
    //     };
    
    // }