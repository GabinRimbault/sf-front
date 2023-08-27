export default function Code({classCode, children}) {
  const style = classCode !== undefined ? classCode + " bloc-code" : "bloc-code"

  return (
    <pre className={style}>
        {children}
    </pre>
  )
}