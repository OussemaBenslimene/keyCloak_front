import { Component } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-accessoire',
  standalone: false,
  templateUrl: './accessoire.component.html',
  styleUrl: './accessoire.component.css'
})
export class AccessoireComponent {

  accessoires! : Accessoire[]; //un tableau de Accessoire
     
     constructor(private accService: AccessoireService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerAccessoires();
      }
    
      chargerAccessoires(){
        this.accService.listeAccessoire().subscribe(accs => {
          console.log(accs);
          this.accessoires = accs;
          });
      }

}
