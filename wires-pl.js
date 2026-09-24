
function wirePriceHTML(){

	var BRANDS = ["RR Kables", "V-Guard", "Paramount", "Others"];

	var DATA = [
			["RR","https://drive.google.com/file/d/1wxP8mu70ZQMP7M3xgHQ1NjwHgCxrr729" ,"2026-01-13.pdf"],
			["RR","https://drive.google.com/file/d/1LUGpYrbEdGHDAaOcAD4ZG0oD8upd-4ZW" ,"2025-06-23.pdf"],
			["RR","https://drive.google.com/file/d/1YF7ztok8cMT7MjnWf1OMneZ2JbV-a-DB"  ,"2025-10-13.pdf"],
			["RR","https://drive.google.com/file/d/1T5KImSwTXS9byh_e9l71aOsDqLDTADZW"  ,"2025-09-23.pdf"],

			["VG","https://drive.google.com/file/d/1CpEDqYt5F35kx4i3j4NNV9pkX8waIt9-" ,"2026-08-12.pdf"],
			["VG","https://drive.google.com/file/d/1DtTFTyggT7In3VpAXmR_McbOQt19Xzdf" ,"2026-02-08.pdf"],
			["VG","https://drive.google.com/file/d/10f2HKwdD6rPVAVQQOBFHGgBr5ZtjscDq" ,"2026-02-01.pdf"],
			["VG","https://drive.google.com/file/d/1X5ekpNgLOeOddiAZqPCpBZFtoV67KXJM" ,"2026-01-15.pdf"],
			["VG","https://drive.google.com/file/d/1_ba1-sLc2mr-e8nWqFsiU3OuICjQjhC-" ,"2025-03-18.pdf"],
			["VG","https://drive.google.com/file/d/1X4LYEB7jc6qiF-GA5I-M9LWApeFXtqNt" ,"2025-02-19.pdf"],
			["VG","https://drive.google.com/file/d/19lYpoYk2PCneO0YuFx99y2ypzBzwVKO3" ,"2025-02-19.pdf"],
			["VG","https://drive.google.com/file/d/1sJ29GkpKItlawTGMVfEQCuNNDXb-CDmJ" ,"2024-11-24.pdf"],

			["Paramount","https://drive.google.com/file/d/1oJ800JxzRI7ZHelGgAy8svqzslkqrGLn", "2025-02-17.pdf"],
			
			["Paraflex","https://drive.google.com/file/d/1SSmuqxxAEoGNRVyILaU0JkxV9rI6d5AD" ,"2023-01-20.pdf"],
			["Paraflex","https://drive.google.com/file/d/1i-s7HpZYGneWnjWt4Di8-y0Kuhu_qZQD" ,"2018-01-11.pdf"],
			
			["Paragold","https://drive.google.com/file/d/1AgzWIxrNClPkPGEUEsdPmcpJgg6571cP" ,"2018-01-11.pdf"]
	];

	/*
	<div class="card">
		<div class="card-header"> RR Kables</div>
		<div class="card-data"> 
			<a class="gdrive-file" href="https://drive.google.com/file/d/1wxP8mu70ZQMP7M3xgHQ1NjwHgCxrr729" >RR Wires - 2026-01-13.pdf</a>
			</div>
		</div>
	*/

	var oldH = "";
	var html = "";

	for(var i=0; i<DATA.length; i++){
		var newH = DATA[i][0];
		var xLink = DATA[i][1];
		var displayName = DATA[i][2];
		
		
		if(oldH===""){
			html += "<div class='card'>";
			html += "<div class='card-header'>"+DATA[i][0]+"</div>";
			html += "<div class='card-data'>";
			oldH = newH;
		}
		if(oldH===newH){
			html += "<a class='gdrive-file' href='"+xLink+"' >"+displayName+"</a>";
		}else{
			html += "</div></div>";  oldH=""; i--;
		}
		if(i===DATA.lenght-1){
			html += "</div></div>";
		}
	}

	return html;
}
