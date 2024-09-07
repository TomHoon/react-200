import './App.css'
import R006_LifycycleEx from './component/R006_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R006_LifycycleEx
        prop_value='FromApp.js'
      />
    </div>
  );
}

export default App;
