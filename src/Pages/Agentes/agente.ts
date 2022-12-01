interface Agente {
  status: number;

  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: any;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: [string];
  assetPath: string;
  isFullPortraitRightFacing: false;
  isPlayableCharacter: true;
  isAvailableForTest: true;
  isBaseContent: false;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  abilities: [
    {
      slot: string;
      displayName: string;
      description: string;
      displayIcon: string;
      video:{}
    }
  ];
  voiceLine: {
    minDuration: number;
    maxDuration: number;
    mediaList: [
      {
        id: number;
        wwise: string;
        wave: string;
      }
    ];
  };
}

export default Agente;
