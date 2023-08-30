import "./styles.css";
import dolphin from "./First_project.png";
import React from "react";

function ImagesApp() {
  return (
    <div>
      <img src={dolphin} width="50%" alt="" />
      <img src={require("./First_project.png")} width="50%" alt="logo" />
    </div>
  );
}

const DescriptionApp = () => {
  return (
    <div>
      <h2>My first app</h2>
      <p>Lorem gfdge nbg hhfds</p>
    </div>
  );
};

function CurrentTimeApp() {
  let currentTime = new Date().toLocaleTimeString();
  return <p>{currentTime}</p>;
}

function handlerClick() {
  alert("You clicked the button");
}
const ButtonApp = () => {
  return <button onclick={handlerClick}> Click me! </button>;
};

const SomeComponent = (props) => {
  return (
    <div>
      <h2>Создатель приложения: </h2>
      <h2>
        {props.firstname}
        {props.lastname}
      </h2>
    </div>
  );
};

function RandomInt(props) {
  let currentVal =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  return <h2>{currentVal}</h2>;
}

export default function App() {
  let name = "Sasha",
    surname = "Gavrilova";
  return (
    // <React.Fragment></React.Fragment> or:
    // <> </>  это безымянный компонент
    <>
      <ImagesApp />
      <DescriptionApp />
      <CurrentTimeApp />
      <ButtonApp />
      <SomeComponent firstname={name} lastname={surname} />
      <RandomInt min={1} max={10} />
    </>
  );
}

// export default class App extends React.Component{
//  render(){
//    return (
//     <div className="App">
//       <img src={dolphin} width="50%" alt="" />
//       <img src={require("./logo_dolphin.png")} width="50%" alt="logo" />
//       <h2>My first app</h2>
//       <p>Lorem gfdge nbg hhfds</p>
//       <p>Current time</p>
//       <p>{new Date()}</p>
//     </div>
//   );
//  }
// }
