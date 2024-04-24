import React from 'react'

const SectionHeader = ({
    coloredTitle = "Section",
    blackTitle = "Header",
    titleClassName="",
    children,
    childrenContainerClassName=""
}) => {
  return (
      <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
          <div className={`${titleClassName} text-[28px] flex gap-2 capitalize`}>
              <span className='text-customDarkCyan tracking-wide'>{coloredTitle}</span>
              <span className='text-black tracking-wide'>{blackTitle}</span>
          </div>
          <div className={childrenContainerClassName}>
              {children}
          </div>
    </div>
  )
}

export default SectionHeader