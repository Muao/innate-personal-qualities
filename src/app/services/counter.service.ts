import { Counter } from '../counter.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private countRef: AngularFireObject<Counter>;

  public constructor(private db: AngularFireDatabase) {
    this.countRef = this.db.object('counter');
  }

  // AngularFireObject<Counter>
  // tslint:disable-next-line: no-any
  public getCounter(): Observable<any> {
    return this.countRef.snapshotChanges();
  }

  public increaseCounter(counter: number): void {
  this.countRef.update({ count: (counter) });
}
}
