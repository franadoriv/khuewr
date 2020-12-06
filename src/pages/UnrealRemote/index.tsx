import React from "react";
import UnrealHelper from "../../utilities/UnrealHelper";
import * as ue from "../../utilities/UnrealRemoteControl";
console.log(ue);
const { EditorLevelLibrary } = ue.default;

export default function UnrealRemote() {
  const onWorkBtn = async () => {
    let actors = await UnrealHelper.test2();
    console.log(actors);
  };

  const onNotWorkBtn = async () => {
    const ell = new EditorLevelLibrary();
    const actors = await ell.GetAllLevelActors();
    console.log(actors);
  };

  return (
    <div>
      <label>{JSON.stringify(process.env)}</label>
      <br />
      <button onClick={onWorkBtn}>WORKS</button>
      <br />
      <button onClick={onNotWorkBtn}>NO WORKS</button>
    </div>
  );
}
