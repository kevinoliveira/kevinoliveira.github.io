	// FORMULA
	//((MP * 7) + (PF * 3)) / 10

	//vetor que vai contar o objeto de notas
	var notas = [];
	
	function calculate(){
		let nomeDisciplina = document.getElementById("input-nome-disciplina").value;		
		let media = parseFloat(document.getElementById("input-media").value.replace(',','.'));
		let notaNescesaria = 0;

		if(nomeDisciplina != "" && !isNaN(media)){

			if(media >= 7){
				add_on_notas(0,nomeDisciplina,media,null);
				add(0,nomeDisciplina,media);
			}else if( media < 3){
				add_on_notas(1,nomeDisciplina,media,null);
				add(1,nomeDisciplina,media);
			}else{
				notaNescesaria = (50 - 7*media)/3;
				//console.log(notaNescesaria);
				add_on_notas(2,nomeDisciplina,media,notaNescesaria);
				add(2,nomeDisciplina,media,notaNescesaria);
			}
		}
		//Reset the form
		document.getElementById("input-nome-disciplina").value= "";
		document.getElementById("input-media").value = "7.0";
	}

	/*
	 <div> <!----------------------------------------------------------------------------------------------------div1-->
        <br> <!--------------------------------------------------------------------------------------------breakline1-->
        <div style="padding-left: 9px;padding-right: 9px;"> <!---------------------------------------------------div2-->
           <span class="c-text c-text--loud ">Linguagem de programação I</span> <!------------------------------span1-->
           <br> <!------------------------------------------------------------------------------------------breakline2->
           <span class="c-text ">Pontos Necessarios: </span> <!-------------------------------------------------span2-->
           <span class="c-text c-text--loud c-link--warning "> 1.7 Pontos </span> <!----------------------------span3-->
        </div>
        <div class="c-progress"> <!------------------------------------------------------------------------------div3-->
          <div class="c-progress__bar c-progress__bar--success" style="width:17%;"></div> <!---------------------div4-->
        </div>                  
     </div>
   */

   	/**
	 * Adiciona a nota a lista de notas na tela.
	 * @function
	 * @param {int} flag - flag que diz se o aluno foi aprovado(0), reprovado(1) ou vai pra prova final(2).
	 * @param {string} disciplina - nome da disciplina.
	 * @param {float} media - media do aluno na disciplina.
	 * @param {float} notaNescesaria - nota nescesaria para o aluno ser aprovado na prova final da disciplina.
	 */
	function add(flag,disciplina,media,notaNescesaria){


		let box = document.getElementById("note-box");

		let div1 = document.createElement("div");
		let div2 = document.createElement("div");
		let div3 = document.createElement("div");
		let div4 = document.createElement("div");
		let span1 = document.createElement("span");
		let span2 = document.createElement("span");
		let span3 = document.createElement("span");
		let breakline1 = document.createElement("br");
		let breakline2 = document.createElement("br");

		div1.appendChild(breakline1);
		div1.appendChild(div2);
		div1.appendChild(div3);

		div2.appendChild(span1);
		div2.appendChild(breakline2);
		div2.appendChild(span2);
		div2.appendChild(span3);

		div3.appendChild(div4);


		switch(flag){
			case 0: //Aprovado

				div2.setAttribute("style","padding-left: 9px;padding-right: 9px;");

				span1.className = "c-text c-text--loud ";
				span1.innerHTML = disciplina;
				span2.className = "c-text";
				span2.innerHTML = "";
				span3.className = "c-text c-text--loud c-link--success";
				span3.innerHTML = " Aprovado ";

				div3.className = "c-progress";

				div4.className = "c-progress__bar c-progress__bar--success";
				div4.setAttribute("style","width:100%;");
				break;
			case 1: //Reprovado
				div2.setAttribute("style","padding-left: 9px;padding-right: 9px;");

				span1.className = "c-text c-text--loud ";
				span1.innerHTML = disciplina;
				span2.className = "c-text";
				span2.innerHTML = "";
				span3.className = "c-text c-text--loud c-link--error";
				span3.innerHTML = " Reprovado ";

				div3.className = "c-progress";

				div4.className = "c-progress__bar c-progress__bar--error";
				div4.setAttribute("style","width:100%;");
				break;
			case 2: //em prova final
				div2.setAttribute("style","padding-left: 9px;padding-right: 9px;");

				span1.className = "c-text c-text--loud ";
				span1.innerHTML = disciplina;
				span2.className = "c-text";
				span2.innerHTML = "Pontos Necessarios: ";
				if(notaNescesaria<3)
					span3.className = "c-text c-text--loud c-link--success";
				else if(notaNescesaria>7)
					span3.className = "c-text c-text--loud c-link--error";
				else
					span3.className = "c-text c-text--loud c-link--warning";

				if(notaNescesaria == 1)
					span3.innerHTML = " "+notaNescesaria.toFixed(1)+" Ponto ";
				else
					span3.innerHTML = " "+notaNescesaria.toFixed(1)+" Pontos ";

				div3.className = "c-progress";
				if(notaNescesaria<3)
					div4.className = "c-progress__bar c-progress__bar--success";
				else if(notaNescesaria>7)
					div4.className = "c-progress__bar c-progress__bar--error";
				else
					div4.className = "c-progress__bar c-progress__bar--warning";
				div4.setAttribute("style","width:"+notaNescesaria.toFixed(1)*10+"%;");
				break;
		}
		//console.log(notaNescesaria);
		//console.log(box);
		//console.log(div1);



		box.appendChild(div1);










		/*
		div2.setAttribute("style","padding-left: 9px;padding-right: 9px;");

		span1.className = "c-text c-text--loud ";
		span1.innerHTML = "Materia: Linguagem de programação I";
		span2.className = "c-text";
		span2.innerHTML = "Pontos Necessarios: ";
		span3.className = "c-text c-text--loud c-link--success";
		span3.innerHTML = " 1.7 Pontos ";

		div3.className = "c-progress";

		div4.className = "c-progress__bar c-progress__bar--success";
		div4.setAttribute("style","width:17%;");
		*/	
	}

	function clearHistory(){
		let box = document.getElementById("note-box");
		while(box.hasChildNodes()) box.removeChild(box.childNodes[0]);
		notas = [];
		localStorage.clear();
	}

	/**
	 * Adiciona o objeto nota ao vetor de objetos no vetor nota.
	 * @function
	 * @param {int} flag - flag que diz se o aluno foi aprovado(0), reprovado(1) ou vai pra prova final(2).
	 * @param {string} disciplina - nome da disciplina.
	 * @param {float} media - media do aluno na disciplina.
	 * @param {float} notaNescesaria - nota nescesaria para o aluno ser aprovado na prova final da disciplina.
	 */
	function add_on_notas(flag,disciplina,media,notaNescesaria){
		 notas.push({
			'flag':flag,
			'disciplina':disciplina,
			'media':media,
			'notaNescesaria':notaNescesaria,
		});

		if(storageAvailable('localStorage')){
			localStorage.setItem('lista-notas', JSON.stringify(notas));
		}

	}

	function storageAvailable(type) {
	    try {
	        var storage = window[type],
	            x = '__storage_test__';
	        storage.setItem(x, x);
	        storage.removeItem(x);
	        return true;
	    }
	    catch(e) {
	        return e instanceof DOMException && (
	            // everything except Firefox
	            e.code === 22 ||
	            // Firefox
	            e.code === 1014 ||
	            // test name field too, because code might not be present
	            // everything except Firefox
	            e.name === 'QuotaExceededError' ||
	            // Firefox
	            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
	            // acknowledge QuotaExceededError only if there's something already stored
	            storage.length !== 0;
	    }
	}

	function inicializa(){
		if(storageAvailable('localStorage')){
			if(!localStorage.getItem('lista-notas')) {
			  //populateStorage();
			  localStorage.setItem('lista-notas', JSON.stringify(notas));
			} else {
			  notas = JSON.parse(localStorage.getItem('lista-notas'));
			  //console.log(notas);
			  notas.map(function(x){
			  	add(x.flag,x.disciplina,x.media,x.notaNescesaria);
			  	//console.log(i);
			  });
			}
		}
	}


	inicializa();
