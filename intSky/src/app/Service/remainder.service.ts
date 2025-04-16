import { Injectable } from '@angular/core';
import { Remainder } from '../Models/remainder.model';
import { BehaviorSubject, interval, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemainderService {
  private remindersSubject = new BehaviorSubject<Remainder[]>([]);
  reminders$ = this.remindersSubject.asObservable();

  private speedUpSubject = new BehaviorSubject<boolean>(false); // <-- use subject
  private timeSubject = new BehaviorSubject<Date>(new Date());
  time$ = this.timeSubject.asObservable();

  constructor() {
    this.startClock();
  }

  private startClock() {
    this.speedUpSubject
      .pipe(
        switchMap(speedUp =>
          interval(1000).pipe(
            map(() => {
              const current = this.timeSubject.getValue();
              const newTime = new Date(current.getTime() + (speedUp ? 60000 : 1000));
              this.timeSubject.next(newTime);
              this.checkExpiredReminders(newTime);
            })
          )
        )
      )
      .subscribe();
  }

  toggleSpeed() {
    const current = this.speedUpSubject.getValue();
    this.speedUpSubject.next(!current);
    return !current;
  }

  getLiveTime() {
    return this.timeSubject.pipe(
      map(date => date.toTimeString().slice(0, 5))
    );
  }

  addReminder(title: string, time: string) {
    const newReminder: Remainder = {
      id: Date.now(),
      title,
      time,
      isPast: false
    };
    const updated = [...this.remindersSubject.getValue(), newReminder];
    this.remindersSubject.next(updated);
  }

  private checkExpiredReminders(currentTime: Date) {
    const currentHHMM = currentTime.toTimeString().slice(0, 5);
    const updated = this.remindersSubject.getValue().map(reminder => {
      if (!reminder.isPast && reminder.time <= currentHHMM) {
        return { ...reminder, isPast: true };
      }
      return reminder;
    });
    this.remindersSubject.next(updated);
  }
}
