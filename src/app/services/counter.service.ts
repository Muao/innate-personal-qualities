import { Counter } from '../counter.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private countRef: AngularFireObject<Counter>;

  public constructor(private db: AngularFireDatabase) {
    this.countRef = this.db.object('counter');
  }

  // AngularFireObject<Counter>
  public getCounter(): Observable<any> {
    return this.countRef.snapshotChanges();
  }

  public increaseCounter(counter: number): void {
    console.log('increase');

    console.log(counter);

  this.countRef.update({ count: (counter) });
}
}
