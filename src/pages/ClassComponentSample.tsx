import { Component } from "react";
import { render } from "react-dom";
import Button from "../components/Button";

type ClassComponentProps = {
  name:string;
}

type ClassComponentState = {
  counter:number;
}

// class component
class ClassComponentSample extends Component {
  // state inital value
  state:ClassComponentState = {counter:0};

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:ClassComponentProps){
    super(props);
    // event binding
    this.increase = this.increase.bind(this); 
    this.decrease = this.decrease.bind(this);
    // this.onClick+=OnClickHandler();
  }

  increase(){
    // state tüm değerler setState komutu ile güncelleniyor.
    this.setState({...this.state, counter: this.state.counter + 1})
  }

  decrease(){
    this.setState({...this.state, counter:this.state.counter - 1});
  }

  // html dosyasının render eden method
  render() {
    return (
      <div>
        Sayac: {this.state.counter}
        <br></br>
        <Button color="black" bgColor="white" text="(+)" onButtonClick={this.increase} />
        <Button color="white" bgColor="gray" text="(-)" onButtonClick={this.decrease} />
      </div>
    )
  }




}

export default ClassComponentSample;