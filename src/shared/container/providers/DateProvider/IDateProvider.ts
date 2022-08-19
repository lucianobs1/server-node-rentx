interface IDateProvider {
  compareInDays(start_date: Date, end_date: Date);
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  addDays(day: number): Date;
}

export { IDateProvider };
