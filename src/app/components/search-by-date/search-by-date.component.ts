import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../button/button.component";
import {Router} from "@angular/router";
import {RecordWorkTime} from "../../model/RecordWorkTime";
import {HttpErrorResponse} from "@angular/common/http";
import {RecordWorkTimeService} from "../../service/record-work-time.service";
import {RecordWorkTimeModule} from "../../../module/record-work-time.module";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-search-by-date',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    RecordWorkTimeModule,
    DatePipe,
    NgForOf,
    NgIf,

  ],
  templateUrl: './search-by-date.component.html',
  styleUrl: './search-by-date.component.css'
})
export class SearchByDateComponent {
  username: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  linkUrlRegistros: string = '/registros';
  records: RecordWorkTime[] = [];

  constructor(private recordWorkTimeService: RecordWorkTimeService, private router: Router) {
  }

  public searchByDate(): void {
    if (this.startDate && this.endDate && this.username) {
      const startDateString = this.startDate.toString().split('T')[0]; // Convertendo para string no formato "YYYY-MM-DD"
      const endDateString = this.endDate.toString().split('T')[0]; // Convertendo para string no formato "YYYY-MM-DD"
      this.recordWorkTimeService.searchRecordsByDateRange(this.username, startDateString, endDateString)
        .subscribe(
          (records: RecordWorkTime[]) => {
            this.records = records;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  protected readonly dateTimestampProvider = dateTimestampProvider;
  protected readonly DatePipe = DatePipe;

}
