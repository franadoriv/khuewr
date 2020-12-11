export default class AppConfig {
  // Getters
  public static get googleClientID(): string {
    return localStorage.getItem("googleClientID") || "";
  }

  public static get apiAddress(): string {
    return localStorage.getItem("apiAddress") || "";
  }

  public static get ueRemContAddress(): string {
    return localStorage.getItem("ueRemContAddress") || "";
  }

  public static get unpckGameFolderPath(): string {
    return localStorage.getItem("unpckGameFolderPath") || "";
  }

  public static get noesisPath(): string {
    return localStorage.getItem("noesisPath") || "";
  }

  public static get uModelPath(): string {
    return localStorage.getItem("uModelPath") || "";
  }

  public static get tempFolderPath(): string {
    return localStorage.getItem("tempFolderPath") || "";
  }

  // Setters
  public static set googleClientID(val: string) {
    localStorage.setItem("googleClientID", val);
  }

  public static set apiAddress(val: string) {
    localStorage.setItem("apiAddress", val);
  }

  public static set ueRemContAddress(val: string) {
    localStorage.setItem("ueRemContAddress", val);
  }

  public static set unpckGameFolderPath(val: string) {
    localStorage.setItem("unpckGameFolderPath", val);
  }

  public static set noesisPath(val: string) {
    localStorage.setItem("noesisPath", val);
  }

  public static set uModelPath(val: string) {
    localStorage.setItem("uModelPath", val);
  }

  public static set tempFolderPath(val: string) {
    localStorage.setItem("tempFolderPath", val);
  }
}
