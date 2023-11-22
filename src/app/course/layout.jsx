import Courses from "./Courses"

export const metadata = {
    title: 'Courses in My Library',
    description: 'Frontend 6B6 class 1 on React',
    keywords: 'React, Next, JavaScript'
  }

export default function layout({children}) {
  return (
    <div>
        <Courses />
        {children}
    </div>
  )
}