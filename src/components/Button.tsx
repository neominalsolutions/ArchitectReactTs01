// kendimize bir çok sayfada kullanabileceğimiz bir component oluşturmak
// components klasörü altında sayfalarda ihtiyaç duyduğum componentler.

type ButtonProps = {
  text:string;
  bgColor:string;
  color:string; // property
  onClick(e:any):void; // event tanımı
}
function Button(props:ButtonProps) {
  const {text,bgColor,color,onClick} = props;
  // TSX dosyamız
  const btnClick = (e:any) => { onClick(e);}
  return <>
   <button onClick={
    (e:any) => onClick(e)
    } style={{color:color,backgroundColor:bgColor}}>{text}</button>
      {/* <button style={{color:color,backgroundColor:bgColor}} onClick={btnClick}>{text}</button> */}
  </>
}
export default Button;