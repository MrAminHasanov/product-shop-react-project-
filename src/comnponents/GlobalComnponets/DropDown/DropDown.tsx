import { ReactNode, useEffect, useState } from 'react'
import c from './DropDown.module.scss'
import classNames from 'classnames'

function DropDown({ dropDownAnimationState, children, transitionTime = 400 }: componentProps) {
  const [dropDownState, setDropDownState] = useState(false);
  const contentClass = classNames(c.content, { [c.activeDropDown]: dropDownAnimationState })

  useEffect(() => {
    if (dropDownAnimationState) {
      setDropDownState(true);
    } else {
      setTimeout(() => setDropDownState(false), transitionTime)
    };
  }, [dropDownAnimationState])

  return (
    <div className={c.component} style={{ "--transitionTime": transitionTime + "ms" } as React.CSSProperties}>
      {
        dropDownState &&
        <div className={contentClass}>
          {children}
        </div>
      }
    </div>
  )
}

export default DropDown

interface componentProps {
  children: ReactNode,
  dropDownAnimationState: boolean,
  transitionTime?: number
}