import Lame from "../../../base/Lame";

export default function BlocProduct({classBlocProduct, children}){
  const style = classBlocProduct !== undefined ? "bloc_product " + classBlocProduct : "bloc_product";

  return (
    <Lame className={style}>
      {children}
    </Lame>
  )
}