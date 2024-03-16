import { Component } from '@angular/core';
import { InscriptionsService } from '../../../inscriptions.service';
import { Inscription } from '../../../store/models';

@Component({
  selector: 'app-inscription-table',
  templateUrl: './inscription-table.component.html',
  styleUrl: './inscription-table.component.scss'
})
export class InscriptionTableComponent {
  displayedColumns = ['userId', 'courseId']
  datasource: Inscription[] = [];
  isLoading: boolean = false;

  constructor( private InscriptionsService: InscriptionsService) { }

  ngOnInit(): void {
    this.getInscriptions()
 }

 getInscriptions() {
   this.isLoading = true;
   this.InscriptionsService.getInscriptions().subscribe(
     (response: any) => {
      console.log(response)
       this.datasource = response;
       this.isLoading = false;
     }
   )
 }

}

