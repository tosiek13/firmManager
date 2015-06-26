<jawImage id="jawImage">
	<div id="full">
		<canvas id="jaw" class="jaw" width="400" height="626"></canvas>
		<canvas id="jaw_pointer" class="jaw_pointer" width="400" height="626"></canvas>
	</div>
</jawImage>

<div id="right">
	Schemat szczęki.
</div>


<table>
	<patientId id=<?php echo '"'.$patientId.'"'; ?>>
	<tr>	<td>Surname: </td><td><?php echo $surname; ?></td>	</tr>
	<tr>	<td>Name: </td><td><?php echo $name; ?></td>	</tr>
	<tr>	<td>Age: </td><td><?php echo $age; ?></td>	</tr>
</table>

<form>
	New treatment:
	<table>
		<tr>	<td>Tooth: </td>		<td><input id="tooth" type="text"></td>	</tr>
		<tr>	<td>Treatment: </td>	<td><input id="treatment" type="text"></td>	</tr>
		<tr>	<td>Date:</td>			
			<td> <input id="date" type="text" value=<?php echo date("d-m-Y").",".date("H:i"); ?>   > </td>	</tr>
	</table>
	<input type="button" onclick="addNewTreatment();" value="ADD">
</form> 