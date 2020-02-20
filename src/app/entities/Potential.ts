import { ContourResult } from './ContourResult';

export class Potential {

  private _leftBrain: number;
  private _rightBrain: number;
  private _man: number;
  private _woman: number;
  private _asymmetry: number;
  private _physical: number;
  private _emotional: number;
  private _intellectual: number;

  private muladhara: number;
  private svadhishthana: number;
  private manipura: number;
  private anahata: number;
  private vishuddha: number;
  private ajna: number;

  public constructor(private contourResult: ContourResult[]) {
    contourResult.forEach((contour: ContourResult) => {
      switch (contour.contourName) {
        case 'Physics' : {
          this.muladhara = contour.valueI;
          this.svadhishthana = contour.valueII;
          break;
        }
        case 'Emotionals' : {
          this.manipura = contour.valueI;
          this.anahata = contour.valueII;
          break;
        }
        case 'Intellectuals' : {
          this.vishuddha = contour.valueI;
          this.ajna = contour.valueII;
          break;
        }
      }

      this._physical = this.muladhara + this.svadhishthana;
      this._emotional = this.manipura + this.anahata;
      this._intellectual = this.vishuddha + this.ajna;
      this._woman = this.muladhara + this.svadhishthana + this.vishuddha;
      this._man = this.manipura + this.anahata + this.vishuddha;
      this._leftBrain = this.manipura + this.vishuddha;
      this._rightBrain = this.anahata + this.ajna;
      this._asymmetry = Math.abs(this._man - this._woman) * this.muladhara;
    });
  }

  public get leftBrain(): number {
    return this._leftBrain;
  }

  public get rightBrain(): number {
    return this._rightBrain;
  }

  public get man(): number {
    return this._man;
  }

  public get woman(): number {
    return this._woman;
  }

  public get asymmetry(): number {
    return this._asymmetry;
  }

  public get physical(): number {
    return this._physical;
  }

  public get emotional(): number {
    return this._emotional;
  }

  public get intellectual(): number {
    return this._intellectual;
  }
}
