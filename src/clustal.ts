export interface IClustal {

  //Properties
  checkTree: boolean;
  newSeq: Number;

  // Functions
  align(phylipName : string, createOutput : boolean) : void;

}




export class Clustal implements IClustal {
  checkTree : boolean;
  newSeq : Number;

  constructor() {
    this.checkTree = true;
    this.newSeq = 0;
    /*
    sequencesMsg = "\nUse the existing GUIDE TREE file,  ";
    profile1Msg = "\nUse the existing GUIDE TREE file for Profile 1,  " ;
    profile2Msg = "\nUse the existing GUIDE TREE file for Profile 2,  ";

    newProfile1TreePrompt = "\nEnter name for new GUIDE TREE file for profile 1 [";
    newProfile2TreePrompt = "\nEnter name for new GUIDE TREE file for profile 2 [";

    initInterface();
    */
  }

 /**
  * @method: The function align is used to do a full multiple sequence alignment.
  * @param phylipName 
  * @param createOutput 
  */
  align(phylipName: string, createOutput: boolean): void {
    let path : string;
    let count : Number;
    //Todo...
  }

}