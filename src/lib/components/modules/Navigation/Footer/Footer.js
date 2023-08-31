export default function Footer({classFooter, children}) {
  const style = classFooter !== undefined ? classFooter : undefined
  return (
    <footer className={style}>
      {children}
    </footer>
  )
}