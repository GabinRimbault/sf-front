import Lame from "../../../base/Lame";
import Img from "../../../base/Img";

export default function HeadProduct({classHeadProduct, imgTurn = 'right', children}) {
  const style = classHeadProduct !== undefined ? "head_product " + classHeadProduct : "head_product";

  return (
    <>
      { imgTurn === 'right' ?
        <Lame className={style}>
          <div className={"content_headproduct left_border"}>
            {children}
          </div>
          <div className={"img_headproduct"}>
            <Img alt={"#"} src={"https://fakeimg.pl/500x300/"} />
          </div>
        </Lame>
      :
        <Lame className={style}>
          <div className={"img_headproduct"}>
            <Img alt={"#"} classImg={"img_border img_rounded"} src={"https://fakeimg.pl/500x300/"} />
          </div>
          <div className={"content_headproduct right_border"}>
            {children}
          </div>
        </Lame>
      }
    </>
  )
}