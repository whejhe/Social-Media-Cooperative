import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  character: any = {};
  profileId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    
  }

  getUsers(){
    this.firestore.getCollection()
  }
}