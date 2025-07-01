import style from "./button.module.css"

export const Button = ({ aria = "button", label = "reset", name = "", callback = () => { } }): React.ReactElement => {
  const onClick = () => {
    callback()
  }
  return (
    <div className={style.buttonBox}>
      <button onClick={onClick} aria-label={aria} name={name}>{label}</button>
    </div>
  )
}
