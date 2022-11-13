import './App.css';
import { ApplicationForm } from './components/application/application';
import { Counter } from './components/counter/counter';
import { CounterTwo } from './components/counterTwo/CounterTwo';
import { Greet } from './components/greet/greet';
import { MuiMode } from './components/mui/mui-mode';
import { Skills } from './components/skills/skills';
import { AppProviders } from './Providers/appProviders';

function App() {
  return (
    <div className="App">
      learn jest
      <Greet name = 'Welcome to react testing'/>
      <ApplicationForm/>
      <Skills skills={['HTML','CSS','JS','React']}/>
      <Counter />
      <AppProviders >
        <MuiMode />
      </AppProviders>
      <CounterTwo count={10}/>
      </div>
  );
}

export default App;
