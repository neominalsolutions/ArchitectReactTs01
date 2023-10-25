// kendimize bir çok sayfada kullanabileceğimiz bir component oluşturmak
// components klasörü altında sayfalarda ihtiyaç duyduğum componentler.

type ButtonProps = {
  text:string;
  bgColor:string;
  color:string; // property
  onButtonClick(e:any):void; // event tanımı
}
function Button(props:ButtonProps) {
  // component için kendi eventimizi tanımlamış olduk.
  const {text,bgColor,color,onButtonClick} = props;
  // TSX dosyamız
  const btnClick = (e:any) => { onButtonClick(e);}
  return <>
   <button onClick={
    (e:any) => onButtonClick(e)
    } style={{color:color,backgroundColor:bgColor}}>{text}</button>
      {/* <button style={{color:color,backgroundColor:bgColor}} onClick={btnClick}>{text}</button> */}
  </>
}
export default Button;