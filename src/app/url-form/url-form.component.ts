import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../model/url';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent {

  url: Url;
  urls:Url[]=[];
  shortString:string="";

  constructor(
    private router: Router,
    private urlService: UrlService
  ) { 
    this.url=new Url();
  }
  
  ngOnInit(): void {
    this.urlService.findAllUrls().subscribe(
      data =>{
        this.urls=data;
      }
    );
  }

  onSubmit(){
    this.urlService.save(this.url).subscribe(
      result => {
        alert("Success Adding");
       this.url.shortUrl=result.shortUrl;
      }
    );
    
  }



}
