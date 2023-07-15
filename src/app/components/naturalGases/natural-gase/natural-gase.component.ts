import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { natural } from 'src/app/models/natural.model';
import { NaturaGasesService } from 'src/app/services/natura-gases.service';


@Component({



  selector: 'app-natural-gase',
  templateUrl: './natural-gase.component.html',
  styleUrls: ['./natural-gase.component.scss']
})
export class NaturalGaseComponent implements OnInit {
  naturalGase: natural[] = [];
  constructor(private naturaGasesService: NaturaGasesService) { }

  ngOnInit(): void {
    
    this.naturaGasesService.getAllNaturalGases()
    .subscribe({
      next:(naturalGase) =>{
       this.naturalGase = naturalGase;
        
      },
      error: (response) =>{
        console.log(response);
      }
    })
   
  }

}
