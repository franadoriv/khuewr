// eslint-disable-next-line @typescript-eslint/no-namespace

export interface RelativeLocation {
  X: number;
  Y: number;
  Z: number;
  LengthSquared: number;
}

export interface RelativeRotation {
  X: number;
  Y: number;
  Z: number;
  LengthSquared: number;
}

export interface RelativeScale3D {
  X: number;
  Y: number;
  Z: number;
  LengthSquared: number;
}

export interface StaticMeshActor {
  id: string;
  name: string;
  staticMeshFile: string;
  relativeLocation: RelativeLocation;
  relativeRotation: RelativeRotation;
  relativeScale3D: RelativeScale3D;
  attachParentDicIdx: number;
  attachParent: number;
}

export interface MapArea {
  _id: string;
  name: string;
  mapid: string;
  staticMeshActorList: StaticMeshActor[];
}
