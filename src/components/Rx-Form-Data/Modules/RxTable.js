import React from "react";

function RxTable(){
    return(
<>
<div className="col-lg-8 col-md-8 col-sm-6">
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">DOctor Name</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Doctor Email</th>
      <th scope="col">Patient Email</th>
      <th scope="col">Doctor Phone</th>
      <th scope="col">Patient Phone</th>
      <th scope="col">Doctor Email</th>
      <th scope="col">Doctor Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</>
    )
}
export default RxTable;