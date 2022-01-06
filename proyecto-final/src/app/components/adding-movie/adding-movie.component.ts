import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GetCardResponse } from 'src/app/interfaces/get-card-response.interface';
import { GetUsersResponse } from 'src/app/interfaces/get-users-response.interface';
import { DialogElementRegisterComponent } from '../dialog-element-register/dialog-element-register.component';

@Component({
  selector: 'app-adding-movie',
  templateUrl: './adding-movie.component.html',
  styleUrls: ['./adding-movie.component.css']
})
export class AddingMovieComponent implements OnInit {

 
  filmName!: string;
  year!: string;
  description!: string;
  image!: string;

  selectedOption: string | undefined;

  movie: GetCardResponse | undefined;

  userForm = new FormGroup({});

  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/movie';

  constructor(public dialog: MatDialog, public http: HttpClient) { }


  openDialog() {
    let dialogRef = this.dialog.open(DialogElementRegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
    location.reload();
  }

  addMovie(movie: GetCardResponse | undefined) {
    console.log('entro la funcion addMovie')
    this.http.post<GetCardResponse>(this.ROOT_URL, movie).subscribe(result => {
      this.openDialog();
    });
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      filmName: new FormControl(null, Validators.required),
      year: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null, Validators.required),
    })
  }

}
