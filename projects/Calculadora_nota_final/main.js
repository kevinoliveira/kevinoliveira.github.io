console.log('my enemy');



//((MP * 7) + (PF * 3)) / 10



	function calculate(){
	//console.log("LOOOOSER");
		let nomeDisciplina = document.getElementById("input-nome-disciplina").value;
		let media = parseFloat(document.getElementById("input-media").value.replace(',','.'));
		let notaNescesaria = 0;

		if(nomeDisciplina != ""){

			if(media >= 7) add(0,nomeDisciplina,media);
			else if( media < 3) add(1,nomeDisciplina,media);
			else{
				notaNescesaria = (50 - 7*media)/3;
				//console.log(notaNescesaria);
				add(2,nomeDisciplina,media,notaNescesaria);
			}
		}
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
					span3.innerHTML = " "+notaNescesaria.toFixed(2)+" Ponto ";
				else
					span3.innerHTML = " "+notaNescesaria.toFixed(2)+" Pontos ";

				div3.className = "c-progress";
				if(notaNescesaria<3)
					div4.className = "c-progress__bar c-progress__bar--success";
				else if(notaNescesaria>7)
					div4.className = "c-progress__bar c-progress__bar--error";
				else
					div4.className = "c-progress__bar c-progress__bar--warning";
				div4.setAttribute("style","width:"+notaNescesaria.toFixed(2)*10+"%;");
				break;
		}
		console.log(notaNescesaria);
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



