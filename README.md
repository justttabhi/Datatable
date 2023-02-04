# Datatable
 <div>
    <h3>1. Install the following packages:</h3>
    npm i angular-datatables,<br>
    npm install jquery --save,<br>
    npm install datatables.net --save,<br>
    npm install datatables.net-dt --save,<br>
    npm install angular-datatables --save,<br>
    npm install @types/jquery --save-dev,<br>
    npm install @types/datatables.net --save-dev<br>
</div>
<div>
    <h3>2. Add the dependencies in the scripts and styles attributes to angular.json:</h3>
    "projects": {                                                           <br>
    "your-app-name": {                                                      <br>
      "architect": {                                                        <br>
        "build": {                                                          <br>
          "options": {                                                      <br>
            "styles": [                                                     <br>
              "node_modules/datatables.net-dt/css/jquery.dataTables.css"    <br>
            ],                                                              <br>
            "scripts": [                                                    <br>
              "node_modules/jquery/dist/jquery.js",                         <br>
              "node_modules/datatables.net/js/jquery.dataTables.js"         <br>
            ],                                                              <br>
            ...                                                             <br>
          }                                                                 <br>
}                                                                           <br>
</div>
<div>
    <h3>3.Import the DataTablesModule at the appropriate level of your app.</h3>
    
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";

    import { DataTablesModule } from "angular-datatables";

    import { AppComponent } from "./app.component";

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, DataTablesModule],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}

</div>
<div>
    4. If Nothing works reffer to :
    https://stackoverflow.com/questions/70014280/facing-error-while-using-angular-datatables  <br>
    npm uninstall angular-datatables  <br>
    npm install angular-datatables@6.0.0  <br>
    npm start
</div>
