import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialArray = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialArray);

  let isDimmed = true;
  let isAllLightsOffButtonDisabled = false;
  let isAllLightsOnButtonDisabled = false;
  let isAllLightsOn = false;

  function handleToggle(toggleId) {
    setLights(
      lights.map((light) =>
        light.id === toggleId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  function handleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  isAllLightsOn = lights.every((light) => light.isOn === true);
  isDimmed = lights.every((light) => light.isOn === false);

  if (isAllLightsOn) {
    isAllLightsOffButtonDisabled = false;
    isAllLightsOnButtonDisabled = true;
  } else if (isDimmed) {
    isAllLightsOffButtonDisabled = true;
    isAllLightsOnButtonDisabled = false;
  } else {
    isAllLightsOffButtonDisabled = false;
    isAllLightsOnButtonDisabled = false;
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
        isAllLightsOffButtonDisabled={isAllLightsOffButtonDisabled}
        isAllLightsOnButtonDisabled={isAllLightsOnButtonDisabled}
      />
    </Layout>
  );
}
