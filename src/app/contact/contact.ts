import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
submitForm(form: any) {
  if (!form.valid) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all fields correctly!',
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: 'Thanks for contacting me 🙌',
    confirmButtonColor: '#38bdf8'
  });

  form.reset();
}
}
