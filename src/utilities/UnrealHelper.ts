import { EditorAssetLibrary } from "./UnrealRemoteControl/classes/libraries/editor-asset-library";
import { EditorLevelLibrary } from "./UnrealRemoteControl/classes/libraries/editor-level-library";
import { EditorUtilityLibrary } from "./UnrealRemoteControl/classes/libraries/editor-utility-library";
import UnrealRemoteControl from "./UnrealRemoteControl/index";
const ell = new EditorLevelLibrary();
const eal = new EditorAssetLibrary();
const eul = new EditorUtilityLibrary();

export default class UnrealHelper {
  public static async createCharacter(id: string) {
    const playerBase = "/Game/Blueprints/Actors/Player/PlayerBase";
    const newPlayer = `/Game/Blueprints/Actors/Player/${id}/${id}`;
    const exists = await eal.DoesAssetExist(
      `/Game/Blueprints/Actors/Player/${id}/${id}`
    );
    console.log({ exists });
    if (!exists) {
      //await eal.DuplicateAsset(`${playerBase}`, `${newPlayer}`);
      const response = await UnrealRemoteControl.makeRequest(
        "put",
        "/remote/object/call",
        {
          objectPath:
            "/Script/RemoteControlLibrary.Default__RemoteControlLibrary",
          functionName: "CreateBlueprintFromActor",
          parameters: {
            from: playerBase,
            to: newPlayer
          }
        }
      );
      console.log({ response });
    }
  }
}
