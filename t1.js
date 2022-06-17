/**/
const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.te} {props.jeesus}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    
    const Total = (props) => {
      return (
        <p>Number of exercises {props.e+props.ex+props.exe}</p>
      )
      }
    
  return (
    <div>
      <Header text={course.name}/>
      <Content te={course.parts[0].name} jeesus={course.parts[0].exercises}/>
      <Content te={course.parts[1].name} jeesus={course.parts[1].exercises}/>
      <Content te={course.parts[2].name} jeesus={course.parts[2].exercises}/>
      <Total e={course.parts[0].exercises} ex={course.parts[1].exercises} exe={course.parts[2].exercises}/>
    </div>
  )
}



export default App
