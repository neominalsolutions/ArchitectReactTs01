import Button from "../components/Button";

function CounterPage(){
  let counter = 0;
  const increase = () => {
    counter++;
    console.log("arttır",counter);
  }
  const decrease = () => {
    counter--;
    console.log("azalt",counter);
  }
  return <>
   Sayac: <label>{counter}</label>
   <Button text="(+)" color="white" bgColor="blue" onClick={increase}  />
   {' '}
   <Button text="(-)" color="red" bgColor="white" onClick={decrease}  />
  </>
}
// /counter-sample routing
export default CounterPage;