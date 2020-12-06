import { UObject } from '../uobject';
import { FName, UObjectRef, FMatrix, FVector, FHitResult, FRotator, TSubclassOf, FString, FVector2D, TOptional, TEnumAsByte } from '../../engine/types';
import { AActor } from '../actors/actor';
import { UParticleSystem, USceneComponent, UForceFeedbackEffect, UForceFeedbackAttenuation, UForceFeedbackComponent, UParticleSystemComponent, USoundBase, UDialogueWave, USoundMix, USoundClass, APlayerController, USaveGame, UCameraShake, UPhysicalMaterial, UPrimitiveComponent, USoundConcurrency, USoundAttenuation, UDecalComponent, UAudioComponent, APawn, ULevelStreaming, APlayerCameraManager, ACharacter, UGameInstance, AGameModeBase, AGameStateBase, UReverbEffect, UInterface, UBlueprint, UDamageType, AController } from '../objects/unimplemented-objects';
import { EAttachLocation, EPSCPoolMethod, EMouseCaptureMode, ESuggestProjVelocityTraceOption, EPhysicalSurface, ECollisionChannel, ESpawnActorCollisionHandlingMethod, EObjectTypeQuery, EDrawDebugTrace } from '../../engine/enums';
import { FTransform, FDialogueContext, FIntVector, FPredictProjectilePathParams, FPredictProjectilePathResult, FLatentActionInfo, FMemoryReader, FCollisionResponseParams, FMinimalViewInfo, FAsyncLoadGameFromSlotDelegate, FAsyncSaveGameToSlotDelegate } from '../structs/unimplemented-structs';
import { UWorld } from '../objects/world';
import { UMaterialInterface } from '../objects/material-interface';
import { UStaticMesh } from '../objects/static-mesh';
import { UClass } from '../objects/class';
declare type Blueprint_PredictProjectilePath_ByObjectTypeReturn = {
    ReturnValue: boolean;
    OutHit: FHitResult;
    OutPathPositions: FVector[];
    OutLastTraceDestination: FVector;
};
declare type Blueprint_PredictProjectilePath_ByTraceChannelReturn = {
    ReturnValue: boolean;
    OutHit: FHitResult;
    OutPathPositions: FVector[];
    OutLastTraceDestination: FVector;
};
declare type CalculateViewProjectionMatricesFromMinimalViewReturn = {
    ReturnValue: void;
    OutViewMatrix: FMatrix;
    OutProjectionMatrix: FMatrix;
    OutViewProjectionMatrix: FMatrix;
};
declare type CalculateViewProjectionMatricesFromViewTargetReturn = {
    ReturnValue: void;
    OutViewMatrix: FMatrix;
    OutProjectionMatrix: FMatrix;
    OutViewProjectionMatrix: FMatrix;
};
declare type GetAllActorsOfClassReturn = {
    ReturnValue: void;
    OutActors: UObjectRef<AActor>[];
};
declare type GetAllActorsOfClassWithTagReturn = {
    ReturnValue: void;
    OutActors: UObjectRef<AActor>[];
};
declare type GetAllActorsWithInterfaceReturn = {
    ReturnValue: void;
    OutActors: UObjectRef<AActor>[];
};
declare type GetAllActorsWithTagReturn = {
    ReturnValue: void;
    OutActors: UObjectRef<AActor>[];
};
declare type LoadDataFromSlotReturn = {
    ReturnValue: boolean;
    OutSaveData: number[];
};
declare type PlayWorldCameraShakeReturn = {
    ReturnValue: void;
    OuterRadius: number;
};
declare type SaveGameToMemoryReturn = {
    ReturnValue: boolean;
    OutSaveData: number[];
};
declare type SpawnObjectReturn = {
    ReturnValue: UObjectRef<UObject>;
    Outer: UObjectRef<UObject>;
};
declare type SuggestProjectileVelocity_CustomArcReturn = {
    ReturnValue: boolean;
    OutLaunchVelocity: FVector;
};
export declare class GameplayStatics extends UObject {
    constructor();
    ActivateReverbEffect(WorldContextObject: UObject, ReverbEffect: UReverbEffect, TagName: FName, Priority: number, Volume: number, FadeTime: number): Promise<void>;
    ApplyDamage(DamagedActor: AActor, BaseDamage: number, EventInstigator: AController, DamageCauser: AActor, DamageTypeClass: TSubclassOf<UDamageType>): Promise<number>;
    ApplyPointDamage(DamagedActor: AActor, BaseDamage: number, HitFromDirection: FVector, HitInfo: FHitResult, EventInstigator: AController, DamageCauser: AActor, DamageTypeClass: TSubclassOf<UDamageType>): Promise<number>;
    ApplyRadialDamage(WorldContextObject: UObject, BaseDamage: number, Origin: FVector, DamageRadius: number, DamageTypeClass: TSubclassOf<UDamageType>, IgnoreActors: AActor[], DamageCauser: AActor, InstigatedByController: AController, bDoFullDamage: boolean, DamagePreventionChannel: ECollisionChannel): Promise<boolean>;
    ApplyRadialDamageWithFalloff(WorldContextObject: UObject, BaseDamage: number, MinimumDamage: number, Origin: FVector, DamageInnerRadius: number, DamageOuterRadius: number, DamageFalloff: number, DamageTypeClass: TSubclassOf<UDamageType>, IgnoreActors: AActor[], DamageCauser: AActor, InstigatedByController: AController, DamagePreventionChannel: ECollisionChannel): Promise<boolean>;
    AreAnyListenersWithinRange(WorldContextObject: UObject, Location: FVector, MaximumRange: number): Promise<boolean>;
    AreSubtitlesEnabled(): Promise<boolean>;
    AsyncLoadGameFromSlot(SlotName: FString, UserIndex: number, LoadedDelegate: FAsyncLoadGameFromSlotDelegate): Promise<void>;
    AsyncSaveGameToSlot(SaveGameObject: USaveGame, SlotName: FString, UserIndex: number, SavedDelegate: FAsyncSaveGameToSlotDelegate): Promise<void>;
    BeginDeferredActorSpawnFromClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, SpawnTransform: FTransform, CollisionHandlingOverride: ESpawnActorCollisionHandlingMethod, Owner: AActor): Promise<UObjectRef<AActor>>;
    BeginSpawningActorFromBlueprint(WorldContextObject: UObject, Blueprint: UBlueprint, SpawnTransform: FTransform, bNoCollisionFail: boolean): Promise<UObjectRef<AActor>>;
    Blueprint_PredictProjectilePath_Advanced(WorldContextObject: UObject, PredictParams: FPredictProjectilePathParams, PredictResult: FPredictProjectilePathResult): Promise<boolean>;
    Blueprint_PredictProjectilePath_ByObjectType(WorldContextObject: UObject, StartPos: FVector, LaunchVelocity: FVector, bTracePath: boolean, ProjectileRadius: number, ObjectTypes: TEnumAsByte<EObjectTypeQuery>[], bTraceComplex: boolean, ActorsToIgnore: AActor[], DrawDebugType: EDrawDebugTrace, DrawDebugTime: number, SimFrequency: number, MaxSimTime: number, OverrideGravityZ: number): Promise<Blueprint_PredictProjectilePath_ByObjectTypeReturn>;
    Blueprint_PredictProjectilePath_ByTraceChannel(WorldContextObject: UObject, StartPos: FVector, LaunchVelocity: FVector, bTracePath: boolean, ProjectileRadius: number, TraceChannel: TEnumAsByte<ECollisionChannel>, bTraceComplex: boolean, ActorsToIgnore: AActor[], DrawDebugType: EDrawDebugTrace, DrawDebugTime: number, SimFrequency: number, MaxSimTime: number, OverrideGravityZ: number): Promise<Blueprint_PredictProjectilePath_ByTraceChannelReturn>;
    BlueprintSuggestProjectileVelocity(WorldContextObject: UObject, TossVelocity: FVector, StartLocation: FVector, EndLocation: FVector, LaunchSpeed: number, OverrideGravityZ: number, TraceOption: ESuggestProjVelocityTraceOption, CollisionRadius: number, bFavorHighArc: boolean, bDrawDebug: boolean): Promise<boolean>;
    BreakHitResult(Hit: FHitResult, bBlockingHit: boolean, bInitialOverlap: boolean, Time: number, Distance: number, Location: FVector, ImpactPoint: FVector, Normal: FVector, ImpactNormal: FVector, PhysMat: UPhysicalMaterial, HitActor: AActor, HitComponent: UPrimitiveComponent, HitBoneName: FName, HitItem: number, FaceIndex: number, TraceStart: FVector, TraceEnd: FVector): Promise<void>;
    CalculateViewProjectionMatricesFromMinimalView(MinimalViewInfo: FMinimalViewInfo, CustomProjectionMatrix: TOptional<FMatrix>): Promise<CalculateViewProjectionMatricesFromMinimalViewReturn>;
    CalculateViewProjectionMatricesFromViewTarget(InViewTarget: AActor): Promise<CalculateViewProjectionMatricesFromViewTargetReturn>;
    CancelAsyncLoading(): Promise<void>;
    ClearSoundMixClassOverride(WorldContextObject: UObject, InSoundMixModifier: USoundMix, InSoundClass: USoundClass, FadeOutTime: number): Promise<void>;
    ClearSoundMixModifiers(WorldContextObject: UObject): Promise<void>;
    CreatePlayer(WorldContextObject: UObject, ControllerId: number, bSpawnPlayerController: boolean): Promise<UObjectRef<APlayerController>>;
    CreateSaveGameObject(SaveGameClass: TSubclassOf<USaveGame>): Promise<UObjectRef<USaveGame>>;
    CreateSound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, bPersistAcrossLevelTransition: boolean, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    DeactivateReverbEffect(WorldContextObject: UObject, TagName: FName): Promise<FPredictProjectilePathParams>;
    DeleteGameInSlot(SlotName: FString, UserIndex: number): Promise<boolean>;
    DeprojectScreenToWorld(Player: APlayerController, ScreenPosition: FVector2D, WorldPosition: FVector, WorldDirection: FVector): Promise<boolean>;
    DoesSaveGameExist(SlotName: FString, UserIndex: number): Promise<boolean>;
    EnableLiveStreaming(Enable: boolean): Promise<void>;
    FindCollisionUV(Hit: FHitResult, UVChannel: number, UV: FVector2D): Promise<boolean>;
    FinishSpawningActor(Actor: AActor, SpawnTransform: FTransform): Promise<UObjectRef<AActor>>;
    FlushLevelStreaming(WorldContextObject: UObject): Promise<void>;
    GetAccurateRealTime(WorldContextObject: UObject, Seconds: number, PartialSeconds: number): Promise<void>;
    GetActorArrayAverageLocation(Actors: AActor[]): Promise<FVector>;
    GetActorArrayBounds(Actors: AActor[], bOnlyCollidingComponents: boolean, Center: FVector, BoxExtent: FVector): Promise<void>;
    GetActorOfClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>): Promise<UObjectRef<AActor>>;
    GetAllActorsOfClass(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>): Promise<GetAllActorsOfClassReturn>;
    GetAllActorsOfClassWithTag(WorldContextObject: UObject, ActorClass: TSubclassOf<AActor>, Tag: FName): Promise<GetAllActorsOfClassWithTagReturn>;
    GetAllActorsWithInterface(WorldContextObject: UObject, Interface: TSubclassOf<UInterface>): Promise<GetAllActorsWithInterfaceReturn>;
    GetAllActorsWithTag(WorldContextObject: UObject, Tag: FName): Promise<GetAllActorsWithTagReturn>;
    GetAudioTimeSeconds(WorldContextObject: UObject): Promise<number>;
    GetCurrentLevelName(WorldContextObject: UObject, bRemovePrefixString: boolean): Promise<FString>;
    GetCurrentReverbEffect(WorldContextObject: UObject): Promise<UObjectRef<UReverbEffect>>;
    GetEnableWorldRendering(WorldContextObject: UObject): Promise<boolean>;
    GetGameInstance(WorldContextObject: UObject): Promise<UObjectRef<UGameInstance>>;
    GetGameMode(WorldContextObject: UObject): Promise<UObjectRef<AGameModeBase>>;
    GetGameState(WorldContextObject: UObject): Promise<UObjectRef<AGameStateBase>>;
    GetGlobalTimeDilation(WorldContextObject: UObject): Promise<number>;
    GetIntOption(Options: FString, Key: FString, DefaultValue: number): Promise<number>;
    GetKeyValue(Pair: FString, Key: FString, Value: FString): Promise<void>;
    GetMaxAudioChannelCount(WorldContextObject: UObject): Promise<number>;
    GetObjectClass(Object: UObject): Promise<UObjectRef<UClass>>;
    GetPlatformName(): Promise<FString>;
    GetPlayerCameraManager(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APlayerCameraManager>>;
    GetPlayerCharacter(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<ACharacter>>;
    GetPlayerController(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APlayerController>>;
    GetPlayerControllerFromID(WorldContextObject: UObject, ControllerID: number): Promise<UObjectRef<APlayerController>>;
    GetPlayerControllerID(Player: APlayerController): Promise<number>;
    GetPlayerPawn(WorldContextObject: UObject, PlayerIndex: number): Promise<UObjectRef<APawn>>;
    GetRealTimeSeconds(WorldContextObject: UObject): Promise<number>;
    GetStreamingLevel(WorldContextObject: UObject, PackageName: FName): Promise<UObjectRef<ULevelStreaming>>;
    GetSurfaceType(Hit: FHitResult): Promise<EPhysicalSurface>;
    GetTimeSeconds(WorldContextObject: UObject): Promise<number>;
    GetUnpausedTimeSeconds(WorldContextObject: UObject): Promise<number>;
    GetViewportMouseCaptureMode(WorldContextObject: UObject): Promise<EMouseCaptureMode>;
    GetViewProjectionMatrix(DesiredView: FMinimalViewInfo, ViewMatrix: FMatrix, ProjectionMatrix: FMatrix, ViewProjectionMatrix: FMatrix): Promise<void>;
    GetWorldDeltaSeconds(WorldContextObject: UObject): Promise<number>;
    GetWorldOriginLocation(WorldContextObject: UObject): Promise<FIntVector>;
    GrabOption(Options: FString, ResultString: FString): Promise<boolean>;
    GrassOverlappingSphereCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, CenterPosition: FVector, Radius: number): Promise<number>;
    HasLaunchOption(OptionToCheck: FString): Promise<boolean>;
    HasOption(Options: FString, InKey: FString): Promise<boolean>;
    IsGamePaused(WorldContextObject: UObject): Promise<boolean>;
    IsSplitscreenForceDisabled(WorldContextObject: UObject): Promise<boolean>;
    LoadDataFromSlot(SlotName: FString, UserIndex: number): Promise<LoadDataFromSlotReturn>;
    LoadGameFromMemory(InSaveData: number[]): Promise<UObjectRef<USaveGame>>;
    LoadGameFromSlot(SlotName: FString, UserIndex: number): Promise<UObjectRef<USaveGame>>;
    LoadStreamLevel(WorldContextObject: UObject, LevelName: FName, bMakeVisibleAfterLoad: boolean, bShouldBlockOnLoad: boolean, LatentInfo: FLatentActionInfo): Promise<void>;
    MakeHitResult(bBlockingHit: boolean, bInitialOverlap: boolean, Time: number, Distance: number, Location: FVector, ImpactPoint: FVector, Normal: FVector, ImpactNormal: FVector, PhysMat: UPhysicalMaterial, HitActor: AActor, HitComponent: UPrimitiveComponent, HitBoneName: FName, HitItem: number, FaceIndex: number, TraceStart: FVector, TraceEnd: FVector): Promise<FHitResult>;
    OpenLevel(WorldContextObject: UObject, LevelName: FName, bAbsolute: boolean, Options: FString): Promise<void>;
    ParseOption(Options: FString, Key: FString): Promise<FString>;
    PlayDialogue2D(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number): Promise<void>;
    PlayDialogueAtLocation(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation): Promise<void>;
    PlayDialogueAtLocation2(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation): Promise<void>;
    PlaySound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, OwningActor: AActor): Promise<void>;
    PlaySoundAtLocation(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency): Promise<void>;
    PlaySoundAtLocation2(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, OwningActor: AActor): Promise<void>;
    PlayWorldCameraShake(WorldContextObject: UObject, Shake: TSubclassOf<UCameraShake>, Epicenter: FVector, InnerRadius: number, Falloff: number, bOrientShakeTowardsEpicenter: boolean): Promise<PlayWorldCameraShakeReturn>;
    PopSoundMixModifier(WorldContextObject: UObject, InSoundMixModifier: USoundMix): Promise<void>;
    PredictProjectilePath(WorldContextObject: UObject, PredictParams: FPredictProjectilePathParams, PredictResult: FPredictProjectilePathResult): Promise<boolean>;
    PrimeSound(InSound: USoundBase): Promise<void>;
    ProjectWorldToScreen(Player: APlayerController, WorldPosition: FVector, ScreenPosition: FVector2D, bPlayerViewportRelative: boolean): Promise<boolean>;
    PushSoundMixModifier(WorldContextObject: UObject, InSoundMixModifier: USoundMix): Promise<void>;
    RebaseLocalOriginOntoZero(WorldContextObject: UObject, WorldLocation: FVector): Promise<FVector>;
    RebaseZeroOriginOntoLocal(WorldContextObject: UObject, WorldLocation: FVector): Promise<FVector>;
    RemovePlayer(Player: APlayerController, bDestroyPawn: boolean): Promise<void>;
    SaveDataToSlot(InSaveData: number[], SlotName: FString, UserIndex: number): Promise<boolean>;
    SaveGameToMemory(SaveGameObject: USaveGame): Promise<SaveGameToMemoryReturn>;
    SaveGameToSlot(SaveGameObject: USaveGame, SlotName: FString, UserIndex: number): Promise<boolean>;
    SetBaseSoundMix(WorldContextObject: UObject, InSoundMix: USoundMix): Promise<void>;
    SetEnableWorldRendering(WorldContextObject: UObject, bEnable: boolean): Promise<void>;
    SetForceDisableSplitscreen(WorldContextObject: UObject, bDisable: boolean): Promise<void>;
    SetGamePaused(WorldContextObject: UObject, bPaused: boolean): Promise<boolean>;
    SetGlobalListenerFocusParameters(WorldContextObject: UObject, FocusAzimuthScale: number, NonFocusAzimuthScale: number, FocusDistanceScale: number, NonFocusDistanceScale: number, FocusVolumeScale: number, NonFocusVolumeScale: number, FocusPriorityScale: number, NonFocusPriorityScale: number): Promise<void>;
    SetGlobalPitchModulation(WorldContextObject: UObject, PitchModulation: number, TimeSec: number): Promise<void>;
    SetGlobalTimeDilation(WorldContextObject: UObject, TimeDilation: number): Promise<void>;
    SetMaxAudioChannelsScaled(WorldContextObject: UObject, MaxChannelCountScale: number): Promise<void>;
    SetPlayerControllerID(Player: APlayerController, ControllerId: number): Promise<void>;
    SetSoundMixClassOverride(WorldContextObject: UObject, InSoundMixModifier: USoundMix, InSoundClass: USoundClass, Volume: number, Pitch: number, FadeInTime: number, bApplyToChildren: boolean): Promise<void>;
    SetSubtitlesEnabled(bEnabled: boolean): Promise<void>;
    SetViewportMouseCaptureMode(WorldContextObject: UObject, MouseCaptureMode: EMouseCaptureMode): Promise<void>;
    SetWorldOriginLocation(WorldContextObject: UObject, NewLocation: FIntVector): Promise<void>;
    SpawnDecalAtLocation(WorldContextObject: UObject, DecalMaterial: UMaterialInterface, DecalSize: FVector, Location: FVector, Rotation: FRotator, LifeSpan: number): Promise<UObjectRef<UDecalComponent>>;
    SpawnDecalAttached(DecalMaterial: UMaterialInterface, DecalSize: FVector, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, LifeSpan: number): Promise<UObjectRef<UDecalComponent>>;
    SpawnDialogue2D(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnDialogueAtLocation(WorldContextObject: UObject, Dialogue: UDialogueWave, Context: FDialogueContext, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnDialogueAttached(Dialogue: UDialogueWave, Context: FDialogueContext, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnDialogueAttached2(Dialogue: UDialogueWave, Context: FDialogueContext, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnEmitterAtLocation(WorldContextObject: UObject, EmitterTemplate: UParticleSystem, Location: FVector, Rotation: FRotator, Scale: FVector, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivateSystem: boolean): Promise<UObjectRef<UParticleSystemComponent>>;
    SpawnEmitterAtLocation2(WorldContextObject: UObject, EmitterTemplate: UParticleSystem, Location: FVector, Rotation: FRotator, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivateSystem: boolean): Promise<UObjectRef<UParticleSystemComponent>>;
    SpawnEmitterAtLocation3(World: UWorld, EmitterTemplate: UParticleSystem, SpawnTransform: FTransform, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>>;
    SpawnEmitterAttached(EmitterTemplate: UParticleSystem, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, Scale: FVector, LocationType: EAttachLocation, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>>;
    SpawnEmitterAttached2(EmitterTemplate: UParticleSystem, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bAutoDestroy: boolean, PoolingMethod: EPSCPoolMethod, bAutoActivate: boolean): Promise<UObjectRef<UParticleSystemComponent>>;
    SpawnForceFeedbackAtLocation(WorldContextObject: UObject, ForceFeedbackEffect: UForceFeedbackEffect, Location: FVector, Rotation: FRotator, bLooping: boolean, IntensityMultiplier: number, StartTime: number, AttenuationSettings: UForceFeedbackAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UForceFeedbackComponent>>;
    SpawnForceFeedbackAttached(ForceFeedbackEffect: UForceFeedbackEffect, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, bLooping: boolean, IntensityMultiplier: number, StartTime: number, AttenuationSettings: UForceFeedbackAttenuation, bAutoDestroy: boolean): Promise<UObjectRef<UForceFeedbackComponent>>;
    SpawnObject(ObjectClass: TSubclassOf<UObject>): Promise<SpawnObjectReturn>;
    SpawnSound2D(WorldContextObject: UObject, Sound: USoundBase, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, ConcurrencySettings: USoundConcurrency, bPersistAcrossLevelTransition: boolean, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnSoundAtLocation(WorldContextObject: UObject, Sound: USoundBase, Location: FVector, Rotation: FRotator, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnSoundAttached(Sound: USoundBase, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    SpawnSoundAttached2(Sound: USoundBase, AttachToComponent: USceneComponent, AttachPointName: FName, Location: FVector, Rotation: FRotator, LocationType: EAttachLocation, bStopWhenAttachedToDestroyed: boolean, VolumeMultiplier: number, PitchMultiplier: number, StartTime: number, AttenuationSettings: USoundAttenuation, ConcurrencySettings: USoundConcurrency, bAutoDestroy: boolean): Promise<UObjectRef<UAudioComponent>>;
    StripSaveGameHeader(SaveData: number[]): Promise<FMemoryReader>;
    SuggestProjectileVelocity(WorldContextObject: UObject, TossVelocity: FVector, StartLocation: FVector, EndLocation: FVector, TossSpeed: number, bHighArc: boolean, CollisionRadius: number, OverrideGravityZ: number, TraceOption: ESuggestProjVelocityTraceOption, ResponseParam: FCollisionResponseParams, ActorsToIgnore: AActor[], bDrawDebug: boolean): Promise<boolean>;
    SuggestProjectileVelocity_CustomArc(WorldContextObject: UObject, StartPos: FVector, EndPos: FVector, OverrideGravityZ: number, ArcParam: number): Promise<SuggestProjectileVelocity_CustomArcReturn>;
    UnloadStreamLevel(WorldContextObject: UObject, LevelName: FName, LatentInfo: FLatentActionInfo, bShouldBlockOnUnload: boolean): Promise<void>;
}
export {};
