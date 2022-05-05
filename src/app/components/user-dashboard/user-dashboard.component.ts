import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private imageService:ImageService) { }

      query: string =''

      photos:any[] =[]
      isLoading:boolean=false
      nextpage :string=''

  ngOnInit(): void {
   
  }
   


  handleSearch()
  {  this.isLoading=true
    this.imageService.SearchImage(this.query,undefined).subscribe(res =>{
     
      console.log("Responce: ",res);
      //this.photos=[...this.photos,...res.photos]
     
      this.photos=[...res.photos]
      this.isLoading=false
      this.nextpage=res.next_page
      
  }  )
}

handleMOre()
{  this.isLoading=true
  this.imageService.SearchImage(undefined,this.nextpage).subscribe(res =>{
   
    console.log("Responce: ",res);
    this.photos=[...this.photos,...res.photos]
   
    //this.photos=[...res.photos]
    this.isLoading=false
    this.nextpage=res.next_page
    
}  )
}


}
