// adcionando a variavel formulario o id  dele
const formulario = document.getElementById("formulario") as HTMLFormElement




formulario.addEventListener("submit",(event)=>{

      event.preventDefault()
      
      const nome = (document.getElementById("nome") as HTMLInputElement).value
      const telefone = (document.getElementById("telefone") as HTMLInputElement).value
      const datadenascimento = (document.getElementById("datadenascimento") as HTMLInputElement).value
      const cpf= (document.getElementById("cpf") as HTMLInputElement).value
      const email = (document.getElementById("email") as HTMLInputElement).value
      
const dados =`
dados coletados:<br>
nome: ${nome}<br>
cpf: ${cpf}<br>
email: ${email}<br>
datadenascimento: ${datadenascimento}<br>
telefone: ${telefone}
`
 const exibir = document.getElementById('resposta');
 if(exibir){
     exibir.innerHTML = dados
 }
 });