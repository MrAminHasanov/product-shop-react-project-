import { ReactNode, useEffect, useState } from 'react'
import c from './DropDown.module.scss'
import classNames from 'classnames'

function DropDown({ dropDownAnimationState, children }: { children: ReactNode, dropDownAnimationState: boolean }) {
  const [dropDownState, setDropDownState] = useState(true);
  const contentClass = classNames(c.content, { [c.activeDropDown]: dropDownAnimationState })
  const handleTransitionEnd = () => {
    if (!dropDownAnimationState) {
      setDropDownState(false)
    }
  }

  useEffect(() => {
    if (dropDownAnimationState) {
      setDropDownState(true);
    }
  }, [dropDownAnimationState])

  return dropDownState && (
    <div className={c.component}>
      <div className={contentClass} onTransitionEnd={handleTransitionEnd}>
        {children}
      </div>
    </div>
  )
}

export default DropDown