type ButtonProps = {
  text:string;
  bgColor:string;
  color:string; // property
  onClick(e:any):void; // event tanımı
}
// kendimize bir çok sayfada kullanabileceğimiz bir component oluşturmak
// components klasörü altında sayfalarda ihtiyaç duyduğum componentler.
function Button(props:ButtonProps) {
  const {text,bgColor,color,onClick} = props;
  // TSX dosyamız
  return <>
   <button onClick={
    (e:any) => onClick(e)
    } style={{color:color,backgroundColor:bgColor}}>{text}</button>
  </>
}
export default Button;