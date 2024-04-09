import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  ComponentsRenderer,
  Header,
  InfoPanel,
  NextButton,
  ProgressBar,
} from "../../components";
import { getCurrentComponent } from "../../utils/utils";
import { components } from "../../utils/componentData";

import { Component } from "../../vite-env";
import "./styles.css";

const RegistrationWrapper = () => {
  const { stepId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentComponent, setCurrentComponent] = useState<Component>(
    components[0]
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const selectionHandler = (validation: boolean, selection: unknown) => {
    console.log("Selected", selection);
    setIsDisabled(!validation);
  };

  const backButtonHandler = () => {
    setIsDisabled(true);
    return navigate(-1);
  };

  const buttonHandler = (nextUri: string) => {
    const url = `/apply/${nextUri}`;
    console.log("URL: ", url);
    setIsDisabled(true);

    return navigate(url);
  };

  useEffect(() => {
    if (stepId) {
      setCurrentComponent(getCurrentComponent(components, stepId));
    }
  }, [location.pathname, stepId]);

  return (
    <div className="registration-wrapper">
      <Header />
      <ProgressBar
        showBackButton={currentComponent.showBackButton}
        backButtonCallback={backButtonHandler}
        percentage={currentComponent.completion}
      />
      <ComponentsRenderer
        component={currentComponent}
        selectionCallback={selectionHandler}
      />
      <NextButton
        nextUri={currentComponent.nextUri}
        callback={buttonHandler}
        isDisabled={isDisabled}
      />
      <InfoPanel />
    </div>
  );
};

export default RegistrationWrapper;
