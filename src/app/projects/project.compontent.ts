import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
        $('#example').DataTable();
    });
    $('#example').Datatable( {
      dom: 'Bfrtip',
      buttons: [
        'edit'
    ]
    });
  }

}