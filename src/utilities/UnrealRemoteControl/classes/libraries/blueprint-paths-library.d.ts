import { UObject } from "../uobject";
import { FString, FText } from "../../engine/types";
declare type CollapseRelativeDirectoriesReturn = {
    ReturnValue: boolean;
    OutPath: FString;
};
declare type MakePathRelativeToReturn = {
    ReturnValue: boolean;
    OutPath: FString;
};
declare type MakePlatformFilenameReturn = {
    ReturnValue: void;
    OutPath: FString;
};
declare type MakeStandardFilenameReturn = {
    ReturnValue: void;
    OutPath: FString;
};
declare type NormalizeDirectoryNameReturn = {
    ReturnValue: void;
    OutPath: FString;
};
declare type NormalizeFilenameReturn = {
    ReturnValue: void;
    OutPath: FString;
};
declare type RemoveDuplicateSlashesReturn = {
    ReturnValue: void;
    OutPath: FString;
};
declare type ValidatePathReturn = {
    ReturnValue: void;
    OutReason: FText;
};
export declare class UBlueprintPathsLibrary extends UObject {
    constructor();
    AutomationDir(): Promise<FString>;
    AutomationLogDir(): Promise<FString>;
    AutomationTransientDir(): Promise<FString>;
    BugItDir(): Promise<FString>;
    ChangeExtension(InPath: FString, InNewExtension: FString): Promise<FString>;
    CloudDir(): Promise<FString>;
    CollapseRelativeDirectories(InPath: FString): Promise<CollapseRelativeDirectoriesReturn>;
    Combine(InPaths: FString[]): Promise<FString>;
    ConvertFromSandboxPath(InPath: FString, InSandboxName: FString): Promise<FString>;
    ConvertRelativePathToFull(InPath: FString, InBasePath: FString): Promise<FString>;
    ConvertToSandboxPath(InPath: FString, InSandboxName: FString): Promise<FString>;
    CreateTempFilename(Path: FString, Prefix: FString, Extension: FString): Promise<FString>;
    DiffDir(): Promise<FString>;
    DirectoryExists(InPath: FString): Promise<boolean>;
    EngineConfigDir(): Promise<FString>;
    EngineContentDir(): Promise<FString>;
    EngineDir(): Promise<FString>;
    EngineIntermediateDir(): Promise<FString>;
    EnginePluginsDir(): Promise<FString>;
    EngineSavedDir(): Promise<FString>;
    EngineSourceDir(): Promise<FString>;
    EngineUserDir(): Promise<FString>;
    EngineVersionAgnosticUserDir(): Promise<FString>;
    EnterpriseDir(): Promise<FString>;
    EnterpriseFeaturePackDir(): Promise<FString>;
    EnterprisePluginsDir(): Promise<FString>;
    FeaturePackDir(): Promise<FString>;
    FileExists(InPath: FString): Promise<boolean>;
    GameAgnosticSavedDir(): Promise<FString>;
    GameDevelopersDir(): Promise<FString>;
    GameSourceDir(): Promise<FString>;
    GameUserDeveloperDir(): Promise<FString>;
    GeneratedConfigDir(): Promise<FString>;
    GetBaseFilename(InPath: FString, bRemovePath: boolean): Promise<FString>;
    GetCleanFilename(InPath: FString): Promise<FString>;
    GetEditorLocalizationPaths(): Promise<FString[]>;
    GetEngineLocalizationPaths(): Promise<FString[]>;
    GetExtension(InPath: FString, bIncludeDot: boolean): Promise<FString>;
    GetGameLocalizationPaths(): Promise<FString[]>;
    GetInvalidFileSystemChars(): Promise<FString>;
    GetPath(InPath: FString): Promise<FString>;
    GetProjectFilePath(): Promise<FString>;
    GetPropertyNameLocalizationPaths(): Promise<FString[]>;
    GetRelativePathToRoot(): Promise<FString>;
    GetRestrictedFolderNames(): Promise<FString[]>;
    GetToolTipLocalizationPaths(): Promise<FString[]>;
    HasProjectPersistentDownloadDir(): Promise<boolean>;
    IsDrive(InPath: FString): Promise<boolean>;
    IsProjectFilePathSet(): Promise<boolean>;
    IsRelative(InPath: FString): Promise<boolean>;
    IsRestrictedPath(InPath: FString): Promise<boolean>;
    IsSamePath(PathA: FString, PathB: FString): Promise<boolean>;
    LaunchDir(): Promise<FString>;
    MakePathRelativeTo(InPath: FString, InRelativeTo: FString): Promise<MakePathRelativeToReturn>;
    MakePlatformFilename(InPath: FString): Promise<MakePlatformFilenameReturn>;
    MakeStandardFilename(InPath: FString): Promise<MakeStandardFilenameReturn>;
    MakeValidFileName(InString: FString, InReplacementChar: FString): Promise<FString>;
    NormalizeDirectoryName(InPath: FString): Promise<NormalizeDirectoryNameReturn>;
    NormalizeFilename(InPath: FString): Promise<NormalizeFilenameReturn>;
    ProfilingDir(): Promise<FString>;
    ProjectConfigDir(): Promise<FString>;
    ProjectContentDir(): Promise<FString>;
    ProjectDir(): Promise<FString>;
    ProjectIntermediateDir(): Promise<FString>;
    ProjectLogDir(): Promise<FString>;
    ProjectModsDir(): Promise<FString>;
    ProjectPersistentDownloadDir(): Promise<FString>;
    ProjectPluginsDir(): Promise<FString>;
    ProjectSavedDir(): Promise<FString>;
    ProjectUserDir(): Promise<FString>;
    RemoveDuplicateSlashes(InPath: FString): Promise<RemoveDuplicateSlashesReturn>;
    RootDir(): Promise<FString>;
    SandboxesDir(): Promise<FString>;
    ScreenShotDir(): Promise<FString>;
    SetExtension(InPath: FString, InNewExtension: FString): Promise<FString>;
    SetProjectFilePath(NewGameProjectFilePath: FString): Promise<void>;
    ShaderWorkingDir(): Promise<FString>;
    ShouldSaveToUserDir(): Promise<boolean>;
    SourceConfigDir(): Promise<FString>;
    Split(InPath: FString, PathPart: FString, FilenamePart: FString, ExtensionPart: FString): Promise<void>;
    ValidatePath(InPath: FString, bDidSucceed: boolean): Promise<ValidatePathReturn>;
    VideoCaptureDir(): Promise<FString>;
}
export {};