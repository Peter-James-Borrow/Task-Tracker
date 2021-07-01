import CallToAction from './Button';
import Welcome from './Welcome';
import MultiplyByOne from './hooks';




function App() {

const names = [
  'Andrew',
  'Adam',
  'Thomas',
  'Sara',
  'Hannah',
  'Kimberly',
]


  return (
    <div>
      <Welcome name="Peter" age="22"/>     
        <CallToAction />
          <MultiplyByOne  />
    </div>
  )
    
}

export default App;
