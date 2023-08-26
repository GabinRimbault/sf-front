import Lame from "../../../base/Lame";

export default function ExposeProduct({ classExposeProduct, children }) {
  const style = classExposeProduct !== undefined ? "expose_product " + classExposeProduct : "expose_product";

  return (
    <Lame classLame={style}>
      <div className="content_product">
        {children}
      </div>
    </Lame>
  )
}