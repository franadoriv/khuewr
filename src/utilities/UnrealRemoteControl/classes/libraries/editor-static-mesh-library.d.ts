import { UObject } from '../uobject';
import { FEditorScriptingMeshReductionOptions, ECollisionTraceFlag, TEnumAsByte, FVector, FRotator, FVector2D, EScriptingCollisionShapeType } from '../../engine/types';
import { UStaticMesh } from '../objects/static-mesh';
import { UStaticMeshComponent } from '../objects/static-mesh-component';
export declare class EditorStaticMeshLibrary extends UObject {
    constructor();
    AddSimpleCollisions(StaticMesh: UStaticMesh, ShapeType: EScriptingCollisionShapeType): Promise<number>;
    AddSimpleCollisionsWithNotification(StaticMesh: UStaticMesh, ShapeType: EScriptingCollisionShapeType, bApplyChanges: boolean): Promise<number>;
    AddUVChannel(StaticMesh: UStaticMesh, LODIndex: number): Promise<boolean>;
    EnableSectionCastShadow(StaticMesh: UStaticMesh, bCastShadow: boolean, LODIndex: number, SectionIndex: number): Promise<void>;
    EnableSectionCollision(StaticMesh: UStaticMesh, bCollisionEnabled: boolean, LODIndex: number, SectionIndex: number): Promise<void>;
    GenerateBoxUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Size: FVector): Promise<boolean>;
    GenerateCylindricalUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Tiling: FVector2D): Promise<boolean>;
    GeneratePlanarUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number, Position: FVector, Orientation: FRotator, Tiling: FVector2D): Promise<boolean>;
    GetCollisionComplexity(StaticMesh: UStaticMesh): Promise<TEnumAsByte<ECollisionTraceFlag>>;
    GetConvexCollisionCount(StaticMesh: UStaticMesh): Promise<number>;
    GetLodCount(StaticMesh: UStaticMesh): Promise<number>;
    GetLodScreenSizes(StaticMesh: UStaticMesh): Promise<number[]>;
    GetNumberVerts(StaticMesh: UStaticMesh, LODIndex: number): Promise<number>;
    GetNumUVChannels(StaticMesh: UStaticMesh, LODIndex: number): Promise<number>;
    GetSimpleCollisionCount(StaticMesh: UStaticMesh): Promise<number>;
    HasInstanceVertexColors(StaticMeshComponent: UStaticMeshComponent): Promise<boolean>;
    HasVertexColors(StaticMesh: UStaticMesh): Promise<boolean>;
    InsertUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number): Promise<boolean>;
    IsSectionCollisionEnabled(StaticMesh: UStaticMesh, LODIndex: number, SectionIndex: number): Promise<boolean>;
    RemoveCollisions(StaticMesh: UStaticMesh): Promise<boolean>;
    RemoveCollisionsWithNotification(StaticMesh: UStaticMesh, bApplyChanges: boolean): Promise<boolean>;
    RemoveLods(StaticMesh: UStaticMesh): Promise<boolean>;
    RemoveUVChannel(StaticMesh: UStaticMesh, LODIndex: number, UVChannelIndex: number): Promise<boolean>;
    SetAllowCPUAccess(StaticMesh: UStaticMesh, bAllowCPUAccess: boolean): Promise<void>;
    SetConvexDecompositionCollisions(StaticMesh: UStaticMesh, HullCount: number, MaxHullVerts: number, HullPrecision: number): Promise<boolean>;
    SetConvexDecompositionCollisionsWithNotification(StaticMesh: UStaticMesh, HullCount: number, MaxHullVerts: number, HullPrecision: number, bApplyChanges: boolean): Promise<boolean>;
    SetGenerateLightmapUVs(StaticMesh: UStaticMesh, bGenerateLightmapUVs: boolean): Promise<boolean>;
    SetLodFromStaticMesh(DestinationStaticMesh: UStaticMesh, DestinationLodIndex: number, SourceStaticMesh: UStaticMesh, SourceLodIndex: number, bReuseExistingMaterialSlots: boolean): Promise<number>;
    SetLods(StaticMesh: UStaticMesh, ReductionOptions: FEditorScriptingMeshReductionOptions): Promise<number>;
    SetLodsWithNotification(StaticMesh: UStaticMesh, ReductionOptions: FEditorScriptingMeshReductionOptions, bApplyChanges: boolean): Promise<number>;
}
