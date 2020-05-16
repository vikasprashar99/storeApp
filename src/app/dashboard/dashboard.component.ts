import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Platform } from '@alyle/ui';
import { LyTheme2 } from '@alyle/ui';

const styles = ({
  content: {
    padding: '2em'
  }
});
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {

  classes = this.theme.addStyleSheet(styles);
  constructor(    private theme: LyTheme2
    ) {
 
  }

  showAdminData=false
  receptionistData=false
  storeManagerData=false
sRole;

// @desc using session storage for storing the selected role
ngOnInit(): void {
  this.sRole=sessionStorage.getItem("role")
  console.log(this.sRole)

  if(Number(this.sRole)===Number(1)){
    this.showAdminData=true
  }
  else if(Number(this.sRole)===Number(2)){
    this.receptionistData=true
  }
  else if(Number(this.sRole)===Number(3)){
    this.storeManagerData=true
  }
}
}
