import { useState } from "react";
import Button from "../components/Button";

function CounterPage(){
  // state kavramı
  // component içerisinde kullanıcı etkileşimi sonunucunda değişen ve componentin tekrar render alınması sağlayan bir local durum yönetimidir.
  const [name,setName] = useState<string>('');
  const [counter,setCounter] = useState<number>(0); // counter değişkenin başlangıç değeri 0 olucak
  // setCounter method ile counter state set edeceğimiz söyledik
  // counter state get edeceğiz.
  // yukarıdaki useState hook set edilen değer virtual dom tarafından takip ediliyor.
  // let counter = 0;
  const increase = () => {
    // counter++; yanlış kullanım
    setCounter(counter + 1);
    console.log("arttır",counter);
  }
  const decrease = () => {
    setCounter(counter - 1);
    console.log("azalt",counter);
    // counter--;
  }
  return <>
   Sayac: <label>{counter}</label>
   <Button text="(+)" color="white" bgColor="blue" onButtonClick={increase}  />
   {' '}
   <Button text="(-)" color="red" bgColor="white" onButtonClick={decrease}  />
  </>
}
// /counter-sample routing
export default CounterPage;