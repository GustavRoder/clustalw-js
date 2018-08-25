namespace ClustalW {

  //TODO: Temp, implement somewhere else...
  class Alignment {

  }


  export interface IAlignmentOutput {

    //Functions
    openAlignmentOutput(path: string): boolean;
    //QTOpenFilesForOutput(fileNames: AlignmentFileNames): boolean;
    //createAlignmentOutput(alignPtr: Alignment, firstSeq : Number, lastSeq : Number): boolean;
    printSecStructMask(prfLength: Number, mask: string, structMask: string): boolean;

    fastaOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    clustalOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    gcgOut(AalignPtr: Alignment[], partToOutput : OutputRegion) : void;
    nexusOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    phylipOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    nbrfOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    gdeOut(alignPtr: Alignment[], partToOutput : OutputRegion) : void;
    nameonly(s: string) : string;

    findRangeValues(alignPtr: Alignment[], rnum: RangeNum, firstRes: Number, lastRes: Number, firstSeq: Number) : void;
    //openExplicitFile(auto_ptr<ofstream>& outFile, string fileName) : boolean;
    //openOutputFile(auto_ptr<ofstream>& outFile, string prompt, string path, string fileExtension) : string;
    SeqGCGCheckSum(sequence: string, length: Number) : Number;
    showAlign() : void;

    clustalOutFile: string;
    gcgOutFile: string;
    nbrfOutFile: string;
    phylipOutFile: string;
    gdeOutFile: string;
    nexusOutFile: string;
    fastaOutFile: string;
    
    clustalOutName: string;
    gcgOutName: string;
    phylipOutName: string;
    nbrfOutName: string;
    gdeOutName: string;
    nexusOutName: string;
    fastaOutName: string;
    strongGroup: string[]; 
    weakGroup: string[];
    clusSecStructOffset: Number;
    clusSequenceOffset: Number;  
  }


  export class AlignmentOutput implements IAlignmentOutput {

    clustalOutFile: string;
    gcgOutFile: string;
    nbrfOutFile: string;
    phylipOutFile: string;
    gdeOutFile: string;
    nexusOutFile: string;
    fastaOutFile: string;
    clustalOutName: string;
    gcgOutName: string;
    phylipOutName: string;
    nbrfOutName: string;
    gdeOutName: string;
    nexusOutName: string;
    fastaOutName: string;
    strongGroup: string[];
    weakGroup: string[];
    clusSecStructOffset: Number;
    clusSequenceOffset: Number;

    constructor() {
    }

    openAlignmentOutput(path: string): boolean {
      throw new Error("Method not implemented.");
    }
    printSecStructMask(prfLength: Number, mask: string, structMask: string): boolean {
      throw new Error("Method not implemented.");
    }

    fastaOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    clustalOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    gcgOut(AalignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    nexusOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    phylipOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    nbrfOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    gdeOut(alignPtr: Alignment[], partToOutput: OutputRegion): void {
      throw new Error("Method not implemented.");
    }

    nameonly(s: string): string {
      throw new Error("Method not implemented.");
    }

    findRangeValues(alignPtr: Alignment[], rnum: RangeNum, firstRes: Number, lastRes: Number, firstSeq: Number): void {
      throw new Error("Method not implemented.");
    }

    SeqGCGCheckSum(sequence: string, length: Number): Number {
      throw new Error("Method not implemented.");
    }
    
    showAlign(): void {
      throw new Error("Method not implemented.");
    }    

  }





  class RangeNum {
    start: Number = 0;;
    end: Number = 0;
  }




  class OutputRegion {
    _firstSeq: Number = 0;
    _lastSeq: Number = 0;
    _firstRes: Number = 0;
    _lastRes: Number = 0;
  }

}
