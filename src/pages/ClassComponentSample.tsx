import { Component } from "react";
import Button from "../components/Button";

type ClassComponentProps = {
  name?:string;
}

type ClassComponentState = {
  counter:number;
  users?:any[];
}


// class component
// class componentler hook desteklemez.
// Hook sadece function Componentlerde kullanılır. Hook özel bir function türüdür. Function Componentin davranışını değiştirmemizi sağlar. UseState state değişimini uygulamamız sağlayan hook.
// hook yerine componentDidMount,componentWillUnmount,componentWillUnmount, render lifecyle methodlar barındırır.
class ClassComponentSample extends Component<ClassComponentProps,ClassComponentState> {
  // state inital value
  // state değerlerini okuma işlemlerini bu isimli değişkenden yapıyoruz.
  state:ClassComponentState = {counter:0}; // FC UseState
  // bu sayede component doma girerken oluşan network request yönetmiş olduk
  controller = new AbortController();

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
    if(this.state.counter > 0) {
      this.setState({...this.state, counter:this.state.counter - 1});
    }
  }
  // Class Component Lifecycle Methods
  // duruma göre component içinde kendi kendilerine tetiklenen methodlar
  componentDidMount(): void {
      // component doma girdiği anda tetiklenir
      console.log("component ilk render");


      // signal ile network request başlattık.
      const loadData = async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users',{signal: this.controller.signal});
  
        let data = await response.json();
        console.log('data', data);

        this.setState({...this.state, users: [...data]})

        // setState yaptığımız komut
      }  
      
      // async data çağırdık.
      loadData();
  }

  componentWillUnmount(): void {
    // component domdan çıktı ilk anı temsil eder
    // apidan veri çekme ve doma güncelleme işlemleri burada yazılır
    // network request kes.
    // bir veri kaynağına unsubscribe olma, network request abort gibi kaynak tüketen, react tarafından yönetilemeyen işlemlerin sonlandırılmasını yaparız.
    // axios da abort signal destekler.
    this.controller.abort();
    console.log("component domdan çıktığında");
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      // component içerinde bir state değişikliği olduğu anda tetiklenir.
      // bir önceki state değeri ile bir sonraki state değerinin karşılaştırılması gereken durumlarda prevState kullanılabilir.
      const prev = prevState as ClassComponentState;
      // 10 değerinden büyük olamasın
      if(prev.counter === 10) {
          this.setState({...this.state, counter:10})
      }

      console.log("component state değişiminde", prevProps, prevState);
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
      console.log("state güncellenmesinden önceki anı temsil eder");
      return this.state;
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