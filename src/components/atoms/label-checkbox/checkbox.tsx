
import type { FormEvent } from "react"
import type { InputProps } from "../../../interfaces/interface"
import styles from "./checkbox.module.css"

export const Checkbox = ({ aria="", label = "default", name = "", callback = () => {} }:InputProps): React.ReactElement => {
  const onChange = (e:FormEvent<HTMLInputElement>) => {
    callback(e)
  }
  return (
    <div className={styles.checkBox}>
      <label aria-label={aria}>
        <input name={name} type="checkbox" onChange={(e) => onChange(e)} /> {label}
      </label>
    </div>
  )
}
